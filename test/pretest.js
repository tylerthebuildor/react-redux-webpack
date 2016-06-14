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

const tokensUrl = `${credentials.url}/tokens`;
const resourceUrl = `${credentials.url}/resource?search[filter]=${credentials.filter}`;

let newModel = {};

fetch(tokensUrl, headersFactory()('post', credentials))
  .then(res => res.json())
  .then(res => fetch(resourceUrl, headersFactory(res.auth_token)('get')))
  .then(res => res.json())
  .then(res => {
    newModel.resource = res;
    const otherResourceUrl = `${credentials.url}/other-resource?filter=${res[0].childResource.id}`;
    return fetch(otherResourceUrl, headersFactory(res.auth_token)('get'));
  })
  .then(res => res.json())
  .then(res => {
    newModel.otherResource = res;
    fs.writeFile('./test/model.json', JSON.stringify(newModel, null, 2), err => {
      if (err) return console.log('There was an error bruh!', err);
      console.log('The file ./test/model.json has been updated!');
    });
  })
  .catch(res => console.log('There was an error bruh!', res));
