---
title: Vue component similar commands
desc: Differentiate `Vue.extend`, `new Vue` and `Vue.component('my-component',...`
category: Development
tags: [ vue ]
date: 2016-11-20
filename: 2016-11-20-Vue component similar commands
---

# Vue component similar commands

`Vue.extend`: subclass the constructor, allowing you to call that constructor in later stages, and does not instantiate the component when declared

`new Vue`: creates a new component at local scope

`Vue.component('my-component', ...)`: registers a component globally so that it is available to more than just current local scope