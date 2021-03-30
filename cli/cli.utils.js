/* eslint-disable max-classes-per-file */

const fs = require('fs');
const path = require('path');

// eslint-disable-next-line
const getFolderList = (directory) => {
  // eslint-disable-next-line
  return fs.readdirSync(directory, { withFileTypes: true })
    .filter((directoryEntry) => directoryEntry.isDirectory())
    .map((directoryEntry) => directoryEntry.name) || [];
};
exports.getFolderList = getFolderList;

const createFolder = (directory, name) => {
  if (typeof name !== 'string') {
    throw new TypeError('Folder name must be type string!');
  }

  if (!name) {
    throw new Error('Folder name is required!');
  }

  fs.mkdir(path.join(directory, name), { recursive: true }, (err) => {
    if (err) {
      console.error('\x1b[31m', `Cannot create folder in ${directory} directory!`);
      throw err;
    }
  });
};
exports.createFolder = createFolder;

const createFile = (directory, name, content = '') => {
  fs.writeFile(path.join(directory, name), content, (err) => {
    if (err) throw err;
  });
};
exports.createFile = createFile;

const readFile = (directory) => fs.readFileSync(directory, 'utf8');
exports.readFile = readFile;

function clearAndUpper(text) {
  return text.replace(/-/, '').toUpperCase();
}

// eslint-disable-next-line
exports.convertFromKebabToPascalCase = (string) => {
  return string.replace(/(^\w|-\w)/g, clearAndUpper);
};

// function isSubstringExist(substring, string) {
//   return string.indexOf(substring) !== -1;
// }

class FileTemplateReplacer {
  constructor(fileString) {
    this.fileString = fileString;
  }

  replace(substring, newString) {
    if (typeof this.fileString !== 'string') {
      throw new TypeError('File must be a string!');
    }

    // if (!isSubstringExist(this.keyWord, this.fileString)) {
    //   return this;
    // }

    const replacerRegExp = new RegExp(substring, 'g');
    this.fileString = this.fileString.replace(replacerRegExp, newString);
    return this;
  }

  getFileContent() {
    return this.fileString;
  }
}

exports.FileTemplateReplacer = FileTemplateReplacer;

class StringReplacer {
  constructor(string) {
    this.string = string;
  }

  replace(substring, replacedString) {
    if (typeof this.string !== 'string') {
      throw new TypeError('Constructor param must be a string!');
    }

    const replacerRegExp = new RegExp(substring, 'g');
    this.string = this.string.replace(replacerRegExp, replacedString);

    return this;
  }

  getModifiedString() {
    return this.string;
  }
}

exports.StringReplacer = StringReplacer;

class File {
  constructor(_path) {
    this._path = _path;

    return this.get();
  }

  get() {
    const content = readFile(this._path);
    const name = path.basename(this._path);

    return {
      name,
      content
    };
  }
}

exports.File = File;

// console.log(new File(path.join(__dirname, './file-templates/component/template.component.vue')));
