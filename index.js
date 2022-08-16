const core = require('@actions/core'); //ES5


const sourceFilePath = core.getInput('path');

console.log(sourceFilePath);
