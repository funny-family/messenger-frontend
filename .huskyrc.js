module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS'
    // 'prepare-commit-msg': 'exec < /dev/tty && node_modules/.bin/cz --hook || true'
  }
};
