let Koa = require('koa')
let KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();


let demoData = require('./datas/demo');
let indexCateModule = require('./datas/indexCateModule.json');
let indexData = require('./datas/index.json');
let categoryNav = require('./datas/cateNavDatas')
let categoryList = require('./datas/cateLists')

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

router.get('/categorynav', (ctx, next) => {
  ctx.body = {
    data:categoryNav,
    code:0
  }
});

router.get('/categorycontent', (ctx, next) => {
  ctx.body = {
    data:categoryList,
    code:0
  }
});

// router.get('https://m.you.163.com/topic/v1/know/navWap.json', (ctx, next) => {
//   console.log(ctx)
// });

app
  .use(router.routes())
  .use(router.allowedMethods())



app.listen('4000', () => {
  console.log('服务器地址: http://localhost:4000');
})
