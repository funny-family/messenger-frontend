const path = require('path');

const { CommandRunner } = require('../command-runner');
const { ComponentTemplateCreatorV2 } = require('../component.create.v.2');

const {
  File,
  StringReplacer,
  convertFromKebabToPascalCase
} = require('../cli.utils');
const { getArgFromScript } = require('../script-arg');

const name = getArgFromScript();
const directory = path.join(__dirname, '../../src/components');
const files = [];

const indexFile = new File(path.join(__dirname, '../file-templates/component/template.index.js'));
const moduleFile = new File(path.join(__dirname, '../file-templates/component/template.module.js'));
const componentFile = new File(path.join(__dirname, '../file-templates/component/template.component.vue'));
const stylesFile = new File(path.join(__dirname, '../file-templates/component/template.styles.css'));

const processedIndexFileName = new StringReplacer(indexFile.name)
  .replace('template.index.js', 'index.js')
  .getModifiedString();
const processedModuleFileName = new StringReplacer(moduleFile.name)
  .replace('template', name)
  .getModifiedString();
const processedComponentFileName = new StringReplacer(componentFile.name)
  .replace('template', name)
  .getModifiedString();
const processedStylesFileName = new StringReplacer(stylesFile.name)
  .replace('template', name)
  .getModifiedString();

const processedIndexFileContent = new StringReplacer(indexFile.content)
  .replace('Example', convertFromKebabToPascalCase(name))
  .replace('example', name)
  .getModifiedString();
const processedModuleFileContent = new StringReplacer(moduleFile.content)
  .replace('Example', convertFromKebabToPascalCase(name))
  .getModifiedString();
const processedComponentFileContent = new StringReplacer(componentFile.content)
  .replace('Example', convertFromKebabToPascalCase(name))
  .replace('example', name)
  .getModifiedString();
const processedStylesFileContent = new StringReplacer(stylesFile.content)
  .getModifiedString();

const processedFiles = [
  {
    processedIndexFileName,
    processedIndexFileContent
  },
  {
    processedModuleFileName,
    processedModuleFileContent
  },
  {
    processedComponentFileName,
    processedComponentFileContent
  },
  {
    processedStylesFileName,
    processedStylesFileContent
  }
];

// eslint-disable-next-line
for (const file of processedFiles) {
  const fileName = file[Object.keys(file)[0]];
  const fileContent = Object.values(file)[1];

  files.push({
    name: fileName,
    content: fileContent
  });
}

const componentTemplateCreator = new ComponentTemplateCreatorV2(
  name, directory, files
).create();

new CommandRunner(componentTemplateCreator).run();
