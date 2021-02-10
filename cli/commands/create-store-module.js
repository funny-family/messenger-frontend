const path = require('path');

const { CommandRunner } = require('../command-runner');
const { StoreModuleTemplateCreator } = require('../store.create-module');
const { getArgFromScript } = require('../script-arg');

const name = getArgFromScript();
const directory = path.join(__dirname, '../../src/store/modules');

new CommandRunner(
  new StoreModuleTemplateCreator(
    name, directory
  ).create()
).run();
