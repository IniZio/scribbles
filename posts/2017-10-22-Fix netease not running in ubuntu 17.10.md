---
title: Fix netease not running in ubuntu 17.10
desc: 
category: Development
tags: [ ]
date: 2017-10-22
filename: 2017-10-22-Fix netease not running in ubuntu 17.10
---

1. Edit the netease shortcut: `sudo vim /usr/share/applications/netease-cloud-music.desktop`
2. Change the 'Exec' line to `netease-cloud-music --no-sandbox %U`
3. Run again