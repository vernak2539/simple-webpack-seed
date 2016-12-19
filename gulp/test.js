const Server = require('karma').Server;

module.exports = (workflow, gulp, $, config) => {
  workflow.subtask('test:unit', (done) => {
    const karmaConfig = require(config.testing.karmaConfig)(Object.assign({}, config));

    new Server(karmaConfig, done).start();
  });
};
