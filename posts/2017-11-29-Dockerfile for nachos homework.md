---
title: Dockerfile for nachos homework
desc: GGWP deadline today D:
category: Development
tags: [ ]
date: 2017-11-29
filename: 2017-11-29-Dockerfile for nachos homework
---

The Dockerfile:
```
FROM ubuntu:16.04

RUN apt-get update && apt-get install -y build-essential ed libc6-dev-i386 g++-multilib

CMD ['bash']
```

`docker run -v ~/magic/comp3511-project2/:/root/project -ti comp3511-project2:latest /bin/bash`
