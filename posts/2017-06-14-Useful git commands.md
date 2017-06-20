---
title: Useful git commands
desc: Not your known git tricks
category: Development
tags: [ ]
date: 2017-06-14
filename: 2017-06-14-Useful git commands
---

`git push origin :<remote-branch>`: delete remote branch

`git diff develop...feat/abc`: compare the feat/abc with the first common ancestor of develop and feat/abc rather than develop itself, in case develop has already moved forward

`git format-patch`: generate a patch file that can be applied as a change. more patcher info
`git am xxx.patch`: attempt to apply a patch file. apply all or abort all.
`git diff > some.patch`
`git apply some.patch`

`git filter-branch --tree-filter 'rm -f password' HEAD` : truly deleted a file in the whole git history tree