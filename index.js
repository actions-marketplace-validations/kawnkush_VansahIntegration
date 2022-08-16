const core = require('@actions/core'); //ES5
const axios = require('axios').default;
const FormData = require('form-data');

const vansahToken = core.getInput('vansahToken');
// const testFormat = core.getInput('testFormat');
const testPaths = core.getInput('testPaths');
// const projectKeyonJira = core.getInput('projectKeyonJira');
const case_key = core.getInput('case_key');
const result_key = core.getInput('result_key');

const log_identifier = core.getInput('log_identifier');
const comment = core.getInput('comment');

console.log(vansahToken);
// console.log(testFormat);
console.log(testPaths);
// console.log(projectKeyonJira);
console.log(case_key);
console.log(log_identifier);
console.log(comment);
//11050

var bodyFormData = new FormData();
bodyFormData.append('file', testPaths);
bodyFormData.append('log_identifier', log_identifier);
bodyFormData.append('result_key', 2);
bodyFormData.append('comment', comment);
console.log(bodyFormData);




axios({
    method: "post",
    url: "https://api.vansah.app/api/v3/auto/test_case/update_test_log",
    data: bodyFormData,
    headers: { "vansah-token": vansahToken , "Content-Type": "multipart/form-data" },
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });