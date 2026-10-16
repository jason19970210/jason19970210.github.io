---
title: "Lua Hello World & Package Management"
date: 2022-12-20
category: programming
slug: "lua-hello-world-and-package-management"
tags: ["lua","snippet"]
---
ref: [https://www.lua.org/home.html](https://www.lua.org/home.html)  
Lua is a powerful, efficient, lightweight, embeddable scripting language.  
It supports procedural programming, object-oriented programming, functional programming, data-driven programming, and data description.

## Installation

### Linux, Ubuntu 22.04

```shell
$ sudo apt install lua5.4 build-essential libreadline-dev liblua5.4-dev -y

### try lua interactive shell
$ lua
>
### quit the interactive shell
> os.exit()
```

ref: [https://stackoverflow.com/questions/67063417/lua-5-3-is-installed-but-i-cant-locate-the-correct-lua-h](https://stackoverflow.com/questions/67063417/lua-5-3-is-installed-but-i-cant-locate-the-correct-lua-h)

## Package Management, LuaRocks

Link: [https://luarocks.org/](https://luarocks.org/)

LuaRocks is the package manager for Lua modules.

```shell
$ mkdir -p luarocks && cd $_
$ wget https://luarocks.org/releases/luarocks-3.9.1.tar.gz
$ tar zxpf luarocks-3.9.1.tar.gz

$ ./configure && sudo make && sudo make install
```

### Verify

```shell
$ luarocks --version

/usr/local/bin/luarocks 3.9.1
LuaRocks main command-line interface
```

### System Environment Variables

```shell
$ eval "$(luarocks path)"
```

ref: [https://stackoverflow.com/questions/47004243/module-installed-by-luarocks-not-found](https://stackoverflow.com/questions/47004243/module-installed-by-luarocks-not-found)

### Install Package

```shell
$ luarocks install http --local
```

#### FAQ

```
Error: Failed installing dependency: https://luarocks.org/cqueues-20200726.54-0.src.rock - Could not find header file for CRYPTO
  No file openssl/crypto.h in /usr/local/include
  No file openssl/crypto.h in /usr/include
You may have to install CRYPTO in your system and/or pass CRYPTO_DIR or CRYPTO_INCDIR to the luarocks command.
Example: luarocks install cqueues CRYPTO_DIR=/usr/local
```

```shell
$ sudo apt install libssl-dev -y
```

ref: [https://stackoverflow.com/questions/71962737/cant-install-http-module-with-luarocks-on-ubuntu](https://stackoverflow.com/questions/71962737/cant-install-http-module-with-luarocks-on-ubuntu)

Photo by [Tsvetoslav Hristov](https://unsplash.com/@tsvetoslav) on [Unsplash](https://unsplash.com/s/photos/stopwatch)
