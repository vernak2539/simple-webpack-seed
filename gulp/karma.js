const Server = require('karma').Server;

module.exports = (workflow) => {
  workflow.subtask('karma', (done) => {
    new Server({
      configFile: `${process.cwd()}/gulp/config/karma.conf.js`,
    }, done).start();
  });
};
