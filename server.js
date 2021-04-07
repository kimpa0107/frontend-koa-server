const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');

const history = options => {
  const middleware = require('connect-history-api-fallback')(options);
  const noop = function () {};

  return function koaConnectHistoryApiFallbackAdapter(ctx, next) {
    middleware(ctx, null, noop);
    return next();
  };
};

const app = new Koa();
app.use(history());
app.use(serve(path.join(__dirname, './dist')));

const PORT = 3333;
app.listen(PORT, () => console.log(`server listen on ${PORT}`));
