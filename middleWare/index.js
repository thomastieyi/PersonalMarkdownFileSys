const logger = () =>  {
    return async (ctx, next) => {
      const start = Date.now()
  
      await next()
  
      const responseTime = (Date.now() - start)
      console.log(`响应时间为: ${responseTime / 1000}s`)
      // ctx.response.body = 'Hello World'
    }
  }
  
  module.exports = (app) => {
    app.use(logger())
  }