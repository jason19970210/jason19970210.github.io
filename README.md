## Hexo & Github Page
link: https://jason19970210.github.io

### Setup environment
```shell
$ npm install hexo-cli hexo-deployer-git -g
```

### Init repo & Install dependencies
```shell
$ hexo init personal-blog
$ npm i
```

### Setup configuration (Github SSH key required)
```shell
$ vim _config.yml


deploy:
  type: git
  repository: git@github.com:jason19970210/jason19970210.github.io.git
  branch: main
```

### Add a README.md to Github repo
```shell
$ echo '## Hexo & Github Page' > ./source/README.md
$ vim _config.yml


# Directory
...
skip_render: README.md
```

### Generate & deploy
```
$ hexo g -d
```