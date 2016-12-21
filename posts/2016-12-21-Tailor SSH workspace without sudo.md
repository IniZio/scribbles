---
title: Tailor SSH workspace without sudo
desc: Set up ZSH (w/ oh-my-zsh), nvim, npm, brew to my need without root access 
category: Development
tags: [ ]
date: 2016-12-21
filename: 2016-12-21-Tailor SSH workspace without sudo
---

# Tailor SSH workspace without sudo

I have had a set of tools for my terminal workspace, but then since I need to work on a project, spent a few hours trying to figure out making tools such as my beloved shell ZSH, npm, Neovim, Linuxbrew to work without being sudoer

#### Environment

1. CSH
2. Git

### Neovim

Almost all popular programs support setting a prefix insteead of default `/usr/bin` if you build from source

```sh
cd ~/Downloads
git clone https://github.com/neovim/neovim.git && cd neovim
rm -r build/
make CMAKE_EXTRA_FLAGS="-DCMAKE_INSTALL_PREFIX=$HOME/nvim" # will make the binary path ~/nvim/bin/nvim
make install
# export PATH="$HOME/nvim/bin:$PATH"
```

Since do not have ctags, I just disabled a few plugins like deoplete and other autocompletions 

### NPM

Wanted to use `~/.local` to store the binarys

Someone already posted the nice options on gist: [Options for install npm](https://gist.github.com/isaacs/579814)

```sh
echo prefix = ~/.local >> ~/.npmrc
curl https://www.npmjs.org/install.sh | sh
```

### Linuxbrew (needed in ZSH install option [2])

```sh
# RVM (to install ruby without root)
cd ~/Downloads
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
\curl -sSL https://get.rvm.io | bash -s stable

# Ruby (to install linuxbrew without root)
rvm install 1.9.2

ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install)"
#PATH="$HOME/.linuxbrew/bin:$PATH"
```



### ZSH

1. ==(DId not work, I used [2] instead)== build from source 

   Again, another nice guide by drewsilcock: [compiling-zsh](https://www.drewsilcock.co.uk/compiling-zsh)

```sh
cd ~/Downloads
git clone git://github.com/zsh-users/zsh.git
cd zsh
autoheader
autoconf
date < stamp-h.in
./configure --prefix=$HOME/.local --enable-shared
make
make install
```

2. Linuxbrew

```sh
brew install zsh
```



Since `chsh` does not work without root most of the time, then you need to use [make zsh my login shell](http://zsh.sourceforge.net/FAQ/zshfaq01.html#l8)

For my CSH, put following line to bottom of file `~/.login`: 

```sh
if ( -f ~/bin/zsh ) exec ~/bin/zsh -l
```

#### Oh-my-Zsh

Since the official installation script defaults to check the existance of zsh at `/etc/shells`, and I do not have root access, I changed the line to not exit even if find the zsh to not exist as it will work anyway

1. Find the line with keyword `/etc/shells`
2. Remove `exit` from the if statement where condition `/etc/shells` does not have zsh

Also I use bulllet-train theme for zsh:

```sh
wget -P ~/.oh-my-zsh/themes https://raw.githubusercontent.com/caiogondim/bullet-train-oh-my-zsh-theme/master/bullet-train.zsh-theme
```



### Load my own dotfiles

```sh
cd ~/Downloads
git clone https://github.com/IniZio/dotfiles.git && cd dotfiles
mv -t ./ .config/nvim  ./bashrc ./vimrc ./zshrc
```

