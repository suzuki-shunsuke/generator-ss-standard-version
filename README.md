# generator-ss-standard-version

[yeoman generator](http://yeoman.io/) to install [standard-version](https://github.com/conventional-changelog/standard-version) and [validate-commit-msg](https://github.com/conventional-changelog/validate-commit-msg) and [husky](https://github.com/typicode/husky) and set git's commitmsg hook.

## What does this generator do?

Install packages.

```
$ yarn add --dev husky validate-commit-msg standard-version
```

And add npm scripts.

```
"scripts": {
  "release": "standard-version",
  "commitmsg": "validate-commit-msg"
}
```

## Requirements

* Node.js
* npm
* yarn
* yo

## Install

```bash
$ npm i -g generator-ss-standard-version
```

Then generate your new project:

```bash
$ yo ss-standard-version
```

## License

MIT © [Suzuki Shunsuke](https://github.com/suzuki-shunsuke)
