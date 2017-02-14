---
title: One hole in export default
desc: Remind myself of how to use export default
category: Development
tags: [ ]
date: 2017-02-14
filename: 2017-02-14-One hole in export default
---

# One hole in export default

So during a migration from vuex0.8 to vuex2, I kind of find myself unclear of the concepts of `export default`

So if you want to export const by const:

```javascript
export const one = () => ...
```

If you want to group it into `export default`:

```javascript
const one = () => ...
const two = () => ...

export default { one, two }

// when import..
import abc from './util'
console.log(abc.one)
```

If you want to allow breaking down the imports:

```javascript
const one = () => ...
const two = () => ...

export { one, two }

// when import...
import {one} from './util'
console.log(one)
```

