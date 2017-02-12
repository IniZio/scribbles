---
title: How to make OSX font work nice on Linux
desc: Using OSX font rendering and San Francisco font on i3wm Ubuntu
category: Development
tags: [ ]
date: 2017-02-12
filename: 2017-02-12-Using OSX font rendering and San Francisco font on i3wm Ubuntu
---

# How to make OSX font work nice on Linux 

So I am currently using Ubuntu with i3wm, which I was inspired and learnt from a [nice i3wm series](https://www.youtube.com/playlist?list=PL5ze0DjYv5DbCv9vNEzFmP6sU7ZmkGzcf). However at the time of writing, the font name in gnome tweak tools have been changed to 'SFNS Display' from 'System San Francisco Display'. 

In order to making appearance easier, I made i3wm use same gtk settings with gnome by adding `exec --no-startip-id gnome-settings-daemon` in my i3 config.

Another important tweak to make the font appear even better on Linux, we need to install infinality, which was mentioned already in the last video of the series, and set serveral values as according to [here](http://www.webupd8.org/2013/06/better-font-rendering-in-linux-with.html).

```sh
sudo add-apt-repository ppa:no1wantdthisname/ppa
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install fontconfig-infinality
```

Set the style of infinality:

```sh
sudo bash /etc/fonts/infinality/infctl.sh setstyle
```

use 'osx'

Set the USE_STYLE variable:

```sh
sudo -H vim /etc/profile.d/infinality-settings.sh
```

search for 'USE_STYLE' and set the value to 'OSX'



Restart the session then you will get nicely rendered SFNS Display font