let Koa = require('koa')
let KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();


let demoData = require('./datas/demo');
let indexCateModule = require('./datas/indexCateModule.json');
let indexData = require('./datas/index.json');

router.get('/demo', (ctx, next) => {
  ctx.body = demoData
});

router.get('/category', (ctx, next) => {
  ctx.body = {
    data:indexCateModule,
    code:0
  }
});

router.get('/indexdata', (ctx, next) => {
  ctx.body = {
    data:indexData,
    code:0
  }
});

app
  .use(router.routes())
  .use(router.allowedMethods())



app.listen('4000', () => {
  console.log('服务器地址: http://localhost:4000');
})
