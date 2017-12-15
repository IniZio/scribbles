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

1. Put it into the project folder

2. Build it: `docker build . -t comp3511-project2`

3. `docker run -v ~/magic/comp3511-project2/:/root/project -ti comp3511-project2:latest /bin/bash`
