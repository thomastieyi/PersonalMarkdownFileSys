const monk = require('monk');
const url = 'localhost:27017/mdApp';
const db = monk(url);
module.exports={
     search :  (name) =>{

         console.log('searching')
        return db.get('users').find({name:name})
           
     },
     insert: (userObj) => {
        return db.get('users').insert(userObj)
     },
     updata: (name , contains) => {
        let user = {	name: name	}
        let changes = {  $set: {arr: contains}	}
        return db.get('users').update(user,changes)
     }
}