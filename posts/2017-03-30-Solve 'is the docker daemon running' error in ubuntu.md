---
title: Solve 'is the docker daemon running?' error in ubuntu
desc: 
category: Development
tags: [ ]
date: 2017-03-30
filename: 2017-03-30-Solve 'is the docker daemon running' error in ubuntu
---

# Solve 'is the docker daemon running?' error in ubuntu
Try
```bash
sudo docker start
sudo docker images
```

If it is successful then that means the docker installation is fine but you are not in user group 'docker'
Therefore fore then you do this: `sudo usermod -aG docker <username>` to solve the issue
