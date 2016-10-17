var createFile = require('create-file');
var moment = require('moment')
var path = require('path')
var inquirer = require('inquirer')
var sanitize = require('sanitize-filename')

var now = moment().format('YYYY-MM-DD')

var post_name = ''
var current_subjects = ['math2111', 'comp2012', 'comp2611', 'comp2711', 'comp2611']

var questions = [{
  name: 'title',
  message: 'Post Title: ',
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
  answers['date'] = now
  answers['filename'] = sanitize(answers['date'] + '-' + answers['title'])

  // yaml front matter from
  var front_matter = '---\n'
  for (var key in answers) {
    if (key === 'tags') {
      front_matter += ' ' + key + ':\n  [ '
      answers[key].forEach(function(tag, index) {
        front_matter += tag + ','
      })
      front_matter = front_matter.slice(0, -1) + ' ]\n'
    } else front_matter += ' ' + key + ':' + answers[key] + '\n'
  }
  front_matter += '---\n\n'

  createFile('./posts/' + answers['filename'] + '.md', front_matter, function(err) {
    if (typeof(err) !== 'undefined' && err !== '') {
      console.error(err)
    } else {
      console.log('Post successfully created');
    }
  })

  // console.log('calling update json');
  // utils.updatePagesJson([answers])
})
