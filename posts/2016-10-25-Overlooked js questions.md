---
title: Overlooked js questions
category: Development
tags: [ ]
date: 2016-10-25
filename: 2016-10-25-Overlooked js questions
---

```js
function Foo() {
	getName = function() {console.log(1);}
}
Foo.getName = function() {console.log(2);}
Foo.prototype.getName=function() {console.log(3);}
var getName = function() {console.log(4);}
function getName() {console.log(5);}

Foo.getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();
```
Outputs 2,4,2,3,3