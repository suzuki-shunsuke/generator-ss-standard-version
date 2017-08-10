'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  initializing() {
    this.composeWith(require.resolve(
      'generator-ss-validate-commit-msg/generators/app'));
  }
  writing() {
    this.fs.extendJSON('package.json', {
      scripts: {release: 'standard-version'}});
  }

  install() {
    this.yarnInstall(['standard-version'], {dev: true});
  }
};
