const testsContext = require.context('../../_tests', true, /\.spec.js$/);

testsContext.keys().forEach(testsContext);
