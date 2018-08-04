const monk = require('monk');
const url = 'localhost:27017/mdApp';
const db = monk(url);
db.then(() => {
    console.log('Connected correctly to server')
  })