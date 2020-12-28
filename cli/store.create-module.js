const fs = require('fs');
const path = require('path');

const {
  createFile,
  createFolder,
  readFile,
  getFolderList,
  FileTemplateReplacer
} = require('./cli.utils');

class StoreModuleTemplateCreator {
  constructor(name, directory) {
    this.name = name;
    this.directory = directory;
  }

  create() {
    if (!fs.existsSync(this.directory)) {
      console.error('\x1b[31m', `Cannot create module ${this.name} in ${this.directory} directory!`);
      process.exit(0);
    }

    getFolderList(this.directory).forEach((folderName) => {
      if (folderName === this.name) {
        console.error('\x1b[31m', `Module name ${this.name} is already used!`);
        process.exit(0);
      }
    });

    const indexFileTemplate = readFile(path.join(
      __dirname, './file-templates/module/template.index.txt'
    ));
    const stateFileTemplate = readFile(path.join(
      __dirname, './file-templates/module/template.state.txt'
    ));
    const mutationsFileTemplate = readFile(path.join(
      __dirname, './file-templates/module/template.mutations.txt'
    ));
    const actionsFileTemplate = readFile(path.join(
      __dirname, './file-templates/module/template.actions.txt'
    ));
    const gettersFileTemplate = readFile(path.join(
      __dirname, './file-templates/module/template.getters.txt'
    ));

    const keyWordToReplace = 'template';

    const processedIndexFileTemplate = new FileTemplateReplacer(indexFileTemplate)
      .replace(keyWordToReplace, this.name)
      .getFile();
    const processedStateFileTemplate = new FileTemplateReplacer(stateFileTemplate)
      .getFile();
    const processedMutationsFileTemplate = new FileTemplateReplacer(mutationsFileTemplate)
      .getFile();
    const processedActionsFileTemplate = new FileTemplateReplacer(actionsFileTemplate)
      .getFile();
    const processedGettersFileTemplate = new FileTemplateReplacer(gettersFileTemplate)
      .getFile();

    createFolder(this.directory, this.name);

    const createdModuleDirectory = path.join(this.directory, this.name);

    createFile(
      createdModuleDirectory, 'index.js', processedIndexFileTemplate
    );
    createFile(
      createdModuleDirectory, `${this.name}.state.js`, processedStateFileTemplate
    );
    createFile(
      createdModuleDirectory, `${this.name}.mutations.js`, processedMutationsFileTemplate
    );
    createFile(
      createdModuleDirectory, `${this.name}.actions.js`, processedActionsFileTemplate
    );
    createFile(
      createdModuleDirectory, `${this.name}.getters.js`, processedGettersFileTemplate
    );

    console.log('\x1b[36m', `Created module ${this.name} in directory ${this.directory}.`);
  }
}

exports.StoreModuleTemplateCreator = StoreModuleTemplateCreator;
