# cousinsd-wp-theme

A simple Wordpress theme


## Install

```shell
git clone git@github.com:darrylcousins/cousinsd-wp-theme.git
cd cousinsd-wp-theme
```

Install packages:

```shell
npm install
```

But unfortunately with node12 semantic-ui can't be installed with `npm install semantic-ui --save-dev` so we need to use git:

```shell
git clone https://github.com/Semantic-Org/Semantic-UI-LESS.git src/less/semantic-ui
```

## Serve and develop

Serve development using `gulp watch` and `browserfy`:

```shell
npm start
```

## Build

Build bundled theme as zip file::

```shell
npm build
```

## Wants ..

* Include semantic-ui base and tachyons
