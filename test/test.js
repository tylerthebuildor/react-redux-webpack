const util = require('util')
const exec = require('child_process').exec;

console.log('tests/model.json has been updated. You can re-run the tests without updating the model by running "gulp test".\n');
exec("find ./src -name '*.spec.js' | xargs mocha -R spec --compilers js:babel-core/register", (error, stdout, stderr) => console.log(stdout));
