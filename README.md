# generator-ss-standard-version

> yeoman generator to install [standard-version](https://github.com/conventional-changelog/standard-version)

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
$ git clone https://github.com/suzuki-shunsuke/generator-ss-standard-version
$ cd generator-ss-standard-version
$ npm link
```

Then generate your new project:

```bash
yo ss-standard-version
```

## License

MIT © [Suzuki Shunsuke](https://github.com/suzuki-shunsuke)
