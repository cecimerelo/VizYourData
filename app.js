const Koa = require('koa');
const app = new Koa();
const fs =require('fs')

app.use(async ctx => {
    ctx.type = 'html'
    ctx.body = fs.createReadStream('index.html');
});

app.listen(8080);