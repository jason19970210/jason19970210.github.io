---
title: "Hexo & Inside"
date: 2022-10-17
category: blog
slug: "hexo-&-inside"
tags: ["Hexo","blog","github","theme"]
---
## pre-requirement

-   node.js >= 8.10, recommand >=10.0
-   npm
-   git

for more detail, please visit: [https://hexo.io/zh-tw/docs/](https://hexo.io/zh-tw/docs/)

## setup

```bash
$ npm install -g hexo-cli
```

## install theme - `Inside`

```bash
$ npm i hexo-theme-inside
```

for more detail, please visit: [https://github.com/ikeq/hexo-theme-inside](https://github.com/ikeq/hexo-theme-inside)

## quick qtart

### modify the global `_config.yml`

```yaml
theme: inside
```

### theme configuration

1.  create a config file named `_config.inside.yml`
2.  Copy [theme config yml](https://github.com/ikeq/hexo-theme-inside/blob/master/_config.yml)

for more detail, please visit: [https://blog.oniuo.com/theme-inside](https://blog.oniuo.com/theme-inside)

## setup for github action

1.  create a new repo named ‘`username`.github.io’ where username is your account name of github
2.  install dependency
    
    ```bash
    $ npm i hexo-deployer-git
    ```
    
3.  modify the section `deploy` inside `_config.yml`, be sure to modify the `username`  
    for more detail, please visit: [https://hexo.io/zh-tw/docs/github-pages.html#專案頁面](https://hexo.io/zh-tw/docs/github-pages.html#%E5%B0%88%E6%A1%88%E9%A0%81%E9%9D%A2)

```yaml
# Deployment
## Docs: https://hexo.io/docs/one-command-deployment
deploy:
  type: 'git'
  repo: 'https://github.com/username/username.github.io'
  branch: 'main'
```

## usage

### create a new post

```bash
$ hexo new "My New Post"
```

More info: [Writing](https://hexo.io/docs/writing.html)

### run server

```bash
$ hexo server

$ hexo s
```

More info: [Server](https://hexo.io/docs/server.html)

### generate static files

```bash
$ hexo generate

$ hexo g
```

More info: [Generating](https://hexo.io/docs/generating.html)

### clean the workspace

```bash
$ hexo clean

$ hexo cl
```

### deploy to remote sites, ex. github

```bash
$ hexo deploy

$ hexo d
```

More info: [Deployment](https://hexo.io/docs/one-command-deployment.html)

### generate & deploy

```bash
$ hedo g -d
```

### command one-liner

```bash
## for local preview
$ hexo cl && hexo g && hexo s

## for git push to github
$ hexo cl && hexo g && hexo d
```
