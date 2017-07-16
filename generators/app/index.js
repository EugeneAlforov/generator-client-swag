const Generator = require('yeoman-generator');
const path = require('path');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {
    initializing() {
        this.props = {};
    }

    prompting() {
        var prompts = [{
            name: 'componentName',
            message: 'Enter component name',
            default: 'Component'
        }];

        return this.prompt(prompts).then((answers) => {
            this.props = answers;
        });
    }

    writing() {
        const dashedName = camelCaseToDash(this.props.componentName);
        this.props.fileName = dashedName;
        const folderPath = `${process.cwd()}/${dashedName}`;

        mkdirp.sync(this.destinationPath(`${process.cwd()}/${dashedName}`));
        this.fs.copyTpl(
            this.templatePath('component-folder/component.jsx'),
            this.destinationPath(`${folderPath}/${dashedName}.jsx`),
            this.props
        );
        this.fs.copyTpl(
            this.templatePath('component-folder/style.scss'),
            this.destinationPath(`${folderPath}/${this.props.fileName}.scss`)
        );
        this.fs.copyTpl(
            this.templatePath('component-folder/index.js'),
            this.destinationPath(`${folderPath}/index.js`),
            this.props
        );
        this.fs.copyTpl(
            this.templatePath('component-folder/component.spec.jsx'),
            this.destinationPath(`${folderPath}/${this.props.fileName}.spec.jsx`),
            this.props
        );
    }
};

function camelCaseToDash( str ) {
    return str.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
}
