# hydro
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

It is a general purpose JavaScript/TypeScript library that can help developers create various kinds of application in no time.

## Table of Contents
- [For developers reading this in GitHub](https://gitlab.com/ii887522/hydro#for-developers-reading-this-in-github)
- [Coding Style](https://gitlab.com/ii887522/hydro#coding-style)
- [Prerequisites](https://gitlab.com/ii887522/hydro#prerequisites)
- [Build custom-node docker image](https://gitlab.com/ii887522/hydro#build-custom-node-docker-image)
- [Install dependencies, build and test project](https://gitlab.com/ii887522/hydro#install-dependencies-build-and-test-project)
- [Deploy project](https://gitlab.com/ii887522/hydro#deploy-project)

## For developers reading this in GitHub
Please go to https://gitlab.com/ii887522/hydro to start contributing instead.

## Coding Style
This project follows [Javascript Standard Style](https://standardjs.com/). Please familiarize yourself with the rules provided in the coding style and
make sure all the proposed code changes in your commits are conforming to the style before making a merge request. You can also make use of
StandardJS - Javascript Standard Style which is a [Visual Studio Code](https://code.visualstudio.com/) plugin and `test` command under the
[Install dependencies, build and test project](https://gitlab.com/ii887522/hydro#install-dependencies-build-and-test-project) section to support you.

## Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop) using Linux containers
- [Visual Studio Code](https://code.visualstudio.com/)
  - Docker
  - EditorConfig for VS Code
  - Markdown All in One
  - Remote - WSL
  - StandardJS - Javascript Standard Style
  - YAML

## Build custom-node docker image

### For Windows:
```sh
cd custom-node
build
cd ..
```

### For Linux:
```sh
cd custom-node
sh build.sh
cd ..
```
<br/>

## Install dependencies, build and test project

### For Windows:
```sh
test
```

### For Linux:
``` sh
sh test.sh
```
<br/>

## Deploy project

### For Windows:
```sh
deploy
```

### For Linux:
```sh
sh deploy.sh
```
