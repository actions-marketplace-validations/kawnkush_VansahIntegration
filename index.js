const core = require('@actions/core'); //ES5


const vansahToken = core.getInput('path');
const testFormat = core.getInput('testFormat');
const testPaths = core.getInput('testPaths');
const projectKeyonJira = core.getInput('projectKeyonJira');
const case_key = core.getInput('case_key');
const log_identifier = core.getInput('log_identifier');
const comment = core.getInput('comment');

console.log(vansahToken);
console.log(testFormat);
console.log(testPaths);
console.log(projectKeyonJira);
console.log(case_key);
console.log(log_identifier);
console.log(comment);
