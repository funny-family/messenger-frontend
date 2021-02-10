exports.getArgFromScript = () => {
  const argvToArray = (
    JSON.parse(process.env.npm_config_argv).original[2] ||
    JSON.parse(process.env.npm_config_argv).cooked[2]
  ).split('');

  argvToArray.splice(0, 2);
  const argv = argvToArray.join('');

  return argv;
};
