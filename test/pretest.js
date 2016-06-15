const fetch = require('node-fetch');
const fs = require('fs');
const credentials = require('./credentials.json');

function headersFactory(jwtToken) {
  return function(method, data) {
    const header = {
      mode: 'cors',
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    };
    if (jwtToken) { header.headers.Authorization = 'Bearer ' + jwtToken }
    if (data) { header.body = JSON.stringify(data) }
    return header;
  }
}

let newModel = {};
const userReposUrl = `${credentials.url}/users/${credentials.user}/repos`;
const fetchUserRepos = fetch(userReposUrl, headersFactory()('get'));

fetchUserRepos
  .then(res => res.json())
  .then(res => {
    if (res.errors) throw Error(res.errors);
    newModel.user = { name: credentials.user };
    newModel.repos = res;
    fs.writeFile('./test/model.json', JSON.stringify(newModel, null, 2), err => {
      console.log('The file ./test/model.json has been updated!');
    });
  })
  .catch(res => console.log('There was an error bruh!', res));
