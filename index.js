

const koa = require('koa');
const koaStatic = require('koa-static');
const path = require('path');

const app = koa();

app.use(koaStatic(path.join(__dirname, 'build'), {}));

app.listen(3000);
