var mongodb=require('../dbHelper')

module.exports = {
    hello: async (ctx, next) => {
      ctx.response.body = 'Hello World';
    }
    ,

    login: async (ctx, next) => {
      let body;
      let name = ctx.request.query.name;
      let password = ctx.request.query.password;
      data = await mongodb.search(name);
      if(data.length===0)  ctx.response.body=[false]
      else{
         if (data[0].password===password) ctx.response.body=[true,data[0].arr]
         else ctx.response.body=[false]
      }
     
    }
    ,

    register: async (ctx, next) => {
       let name =ctx.request.query.name;
       let password = ctx.request.query.password;
       let email = ctx.request.query.email;
       data = await mongodb.search(name);
       if(data.length===1) ctx.response.body=[false];
       else{
        userObj = {
          name: name,
          password: password,
          email: email,
          arr:[   { name: '模板',  mdValue:'## 1Vue-markdownEditor\n'}     ]
        }
         res = await mongodb.insert(userObj);
         ctx.response.body=[true,res.name+' 已经创建'];
       }

    } 
    ,

    updata : async (ctx , next) => {
             req = await mongodb.updata(ctx.request.body.name,ctx.request.body.contains);
             if(req.ok===1) ctx.response.body=[true]
    }




  }