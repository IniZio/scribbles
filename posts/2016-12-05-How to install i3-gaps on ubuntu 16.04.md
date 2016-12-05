---
title: How to install i3-gaps on ubuntu 16.04
desc: Add gaps to your i3wm
category: Development
tags: [ i3, ubuntu ]
date: 2016-12-05
filename: 2016-12-05-How to install i3-gaps on ubuntu 16.04
---

# How to install i3-gaps on ubuntu 16.04

#### Installation commands

```sh
sudo apt install libxcb1-dev libxcb-keysyms1-dev libpango1.0-dev libxcb-util0-dev libxcb-icccm4-dev libyajl-dev libstartup-notification0-dev libxcb-randr0-dev libev-dev libxcb-cursor-dev libxcb-xinerama0-dev libxcb-xkb-dev libxkbcommon-dev libxkbcommon-x11-dev autoconf

cd ~/Downloads

# clone the repository
git clone https://www.github.com/Airblader/i3 i3-gaps
cd i3-gaps

# compile & install
autoreconf --force --install
rm -rf build/
mkdir -p build && cd build/

../configure --prefix=/usr --sysconfdir=/etc
make
sudo make install
```

#### Additional lines added to my .config/i3/config

```sh
# Semi-Transparent i3bar
set $transparent #00000060
bar {
  height 25
  position top
  status_command i3blocks -c ~/.config/i3/i3blocks.conf
  i3bar_command i3bar -t
  font pango:System San Francisco Display, FontAwesome 10
  tray_output primary
  colors {
    #separator #AAAAAA
    separator #FFFFFF
    background #1f2326
    background $transparent
    statusline #FFFFFF
    focused_workspace #9FCA56 #9FCA56 #151718
    active_workspace #DCCD69 #DCCD69 #151718
    inactive_workspace #1f2326 #1f2326 #AAAAAA
    urgent_workspace #CE4045 #CE4045 #FFFFFF
}

# gaps
smart_gaps on # no gaps when only one tile in workspace
smart_borders on
gaps inner 10
```

#### Problem with my i3blocks

The WiFi block apparently kills my i3block, no error in log though. So I commented it for now

```sh
#[wifi]
#label=
##instance=wlp2s0
#command=echo "$(iwlist wlp2s0 scan| sed 's/  /\n/g' | grep Quality | sed 's/Link Quality://' | sed 's/Quality=//' | sed 's/ //g')"
#interval=10
#separator=false
```

![Screenshot](https://github.com/IniZio/Thoughts/blob/master/posts/Screen.png)