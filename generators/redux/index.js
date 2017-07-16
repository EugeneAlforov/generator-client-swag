const Generator = require('yeoman-generator');
const path = require('path');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {
    initializing() {
        this.props = {};
    }

    prompting() {
        var prompts = [{
            name: 'sliceName',
            message: 'Enter redux slice name',
            default: 'some'
        }];

        return this.prompt(prompts).then((answers) => {
            this.props = answers;
        });
    }

    writing() {
        const dashedName = camelCaseToDash(this.props.sliceName);
        this.props.fileName = dashedName;
        const folderPath = `${process.cwd()}/${dashedName}`;
        this.props.prefix = dashCaseToUppercase(dashedName) + '_';

        mkdirp.sync(this.destinationPath(`${process.cwd()}/${dashedName}`));
        this.fs.copyTpl(
            this.templatePath('actions.js'),
            this.destinationPath(`${folderPath}/${dashedName}.actions.js`),
            this.props
        );
        this.fs.copyTpl(
            this.templatePath('reducer.js'),
            this.destinationPath(`${folderPath}/${dashedName}.reducer.js`),
            this.props
        );
        this.fs.copyTpl(
            this.templatePath('selectors.js'),
            this.destinationPath(`${folderPath}/${dashedName}.selectors.js`)
        );
        this.fs.copyTpl(
            this.templatePath('dispatchers.js'),
            this.destinationPath(`${folderPath}/${dashedName}.dispatchers.js`),
            this.props
        );
    }
};

function camelCaseToDash(str) {
    return str.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
}
function dashCaseToUppercase (str) {
    return str.toUpperCase().replace(/-/g, '_');
}
