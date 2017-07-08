'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    this.fs.extendJSON('package.json', {
      scripts: {
        release: 'standard-version',
        commitmsg: 'validate-commit-msg'}});
  }

  install() {
    this.yarnInstall(
      ['validate-commit-msg', 'husky', 'standard-version'], {dev: true});
  }
};
