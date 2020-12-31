class CommandRunner {
  constructor(command) {
    this.command = command;
  }

  run() {
    return this.command;
  }
}

exports.CommandRunner = CommandRunner;
