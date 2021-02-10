const fs = require('fs');
const path = require('path');

const {
  createFile,
  createFolder,
  // readFile,
  getFolderList
  // FileTemplateReplacer,
  // convertFromKebabToPascalCase
} = require('./cli.utils');

class ComponentTemplateCreatorV2 {
  constructor(name, directory, files = []) {
    this.name = name;
    this.directory = directory;
    this.files = files;
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

    createFolder(this.directory, this.name);

    const createdComponentDirectory = path.join(this.directory, this.name);

    // eslint-disable-next-line
    for (const file of this.files) {
      createFile(
        createdComponentDirectory, file.name, file.content
      );
    }

    console.log('\x1b[36m', `Created component ${this.name} in directory ${this.directory}.`);
  }
}

exports.ComponentTemplateCreatorV2 = ComponentTemplateCreatorV2;
