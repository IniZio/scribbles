var createFile = require('create-file');
var moment = require('moment')
var path = require('path')
var inquirer = require('inquirer')
var sanitize = require('sanitize-filename')

var now = moment().format('YYYY-MM-DD')

var post_name = ''
var current_subjects = ['math2111', 'comp2021', 'comp2521', 'sosc2780', 'isom2030']

var questions = [{
  name: 'title',
  message: 'Post Title: ',
}, {
  name: 'desc',
  message: 'Description: ',
}, {
  name: 'category',
  message: 'Category: ',
  type: 'list',
  choices: ['Development', 'Life', 'Study', 'Game'],
}, {
  name: 'tags',
  message: 'Tags: ',
  type: 'checkbox',
  choices: ['webpack', 'vue'].concat(current_subjects),
}, ]

var answers = {}

function capitalize(s)
{
    return s && s[0].toUpperCase() + s.slice(1);
}

inquirer.prompt(questions).then(function(answers) {
  answers['title'] = capitalize(answers['title'])
  if (answers['category'] == 'Study'&& answers['tags']) answers['title'] = capitalize(answers['tags'][0])
  answers['date'] = now
  answers['filename'] = sanitize(answers['date'] + '-' + answers['title'])
  answers['desc'] = answers['desc']

  // yaml front matter from
  var front_matter = '---\n'
  for (var key in answers) {
    if (key === 'tags') {
      front_matter += key + ': [ '
      answers[key].forEach(function(tag, index) {
        front_matter += tag + ','
      })
      front_matter = front_matter.slice(0, -1) + ' ]\n'
    } else front_matter += key + ': ' + answers[key] + '\n'
  }
  front_matter += '---\n\n# ' + answers['title']

  createFile('./posts/' + answers['filename'] + '.md', front_matter, function(err) {
    if (typeof(err) !== 'undefined' && err !== '') {
      console.error(err)
    } else {
      console.log('Post successfully created');
    }
  })
})
