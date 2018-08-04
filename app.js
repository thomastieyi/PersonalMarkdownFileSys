const koa = require('koa2')
const app = new koa()
const middleWare = require('./middleware')
const router = require('./router')
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
const enforceHttps = require('koa-sslify');
let https = require('https');
let fs = require('fs');
let privateKey=fs.readFileSync("C:\\Users\\pc\\Desktop\\private.pem",'utf8')
let certificate=fs.readFileSync("C:\\Users\\pc\\Desktop\\file.crt",'utf8')
let credentials = {key: privateKey, cert: certificate};

app.use(enforceHttps());

app.use(cors({
    origin: "*",
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

app.use(bodyParser());

middleWare(app);

router(app);

let httpsServer = https.createServer(credentials, app.callback());
httpsServer.listen(8080,()=>{
  console.log('server is running at http://localhost:8080')
});
