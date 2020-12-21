const path = require('path');

const { CommandRunner } = require('../command-runner');
const { ComponentTemplateCreator } = require('../component.create');
const { getArgFromCurrentDirectory } = require('../script-arg');

const name = getArgFromCurrentDirectory();
const directory = path.join(__dirname, '../../src/components');

new CommandRunner(
  new ComponentTemplateCreator(
    name, directory
  ).create()
).run();
