const fs = require('fs');
const path = require('path');

const {
  createFile,
  createFolder,
  readFile,
  getFolderList,
  FileTemplateReplacer,
  convertFromKebabToPascalCase
} = require('./cli.utils');

class ComponentTemplateCreator {
  constructor(name, directory) {
    this.name = name;
    this.directory = directory;
  }

  create() {
    if (!fs.existsSync(this.directory)) {
      console.error('\x1b[31m', `Cannot create component ${this.name} in ${this.directory} directory!`);
      process.exit(0);
    }

    const kebabCaseRegex = /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/g;
    if (!kebabCaseRegex.test(this.name)) {
      console.error('\x1b[31m', `Component name ${this.name} must be in kebab-case!`);
      process.exit(0);
    }

    getFolderList(this.directory).forEach((folderName) => {
      if (folderName === this.name) {
        console.error('\x1b[31m', `Component name ${this.name} is already used!`);
        process.exit(0);
      }
    });

    const indexFileTemplate = readFile(path.join(
      __dirname, './file-templates/component/template.index.txt'
    ));
    const componentFileTemplate = readFile(path.join(
      __dirname, './file-templates/component/template.component.txt'
    ));
    const styleFileTemplate = readFile(path.join(
      __dirname, './file-templates/component/template.styles.txt'
    ));
    const moduleFileTemplate = readFile(path.join(
      __dirname, './file-templates/component/template.module.txt'
    ));

    const processedIndexFileTemplate = new FileTemplateReplacer(indexFileTemplate)
      .replace('Example', convertFromKebabToPascalCase(this.name))
      .replace('example', this.name)
      .getFileContent();
    const processedComponentFileTemplate = new FileTemplateReplacer(componentFileTemplate)
      .replace('Example', convertFromKebabToPascalCase(this.name))
      .replace('example', this.name)
      .getFileContent();
    const processedStyleFileTemplate = new FileTemplateReplacer(styleFileTemplate)
      .getFileContent();
    const processedModuleFileTemplate = new FileTemplateReplacer(moduleFileTemplate)
      .replace('Example', convertFromKebabToPascalCase(this.name))
      .getFileContent();

    createFolder(this.directory, this.name);

    const createdComponentDirectory = path.join(this.directory, this.name);

    createFile(
      createdComponentDirectory, 'index.js', processedIndexFileTemplate
    );
    createFile(
      createdComponentDirectory, `${this.name}.component.vue`, processedComponentFileTemplate
    );
    createFile(
      createdComponentDirectory, `${this.name}.module.js`, processedModuleFileTemplate
    );
    createFile(
      createdComponentDirectory, `${this.name}.styles.css`, processedStyleFileTemplate
    );

    console.log('\x1b[36m', `Created component ${this.name} in directory ${this.directory}.`);
  }
}

exports.ComponentTemplateCreator = ComponentTemplateCreator;
