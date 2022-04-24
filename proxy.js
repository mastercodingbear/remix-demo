/**
 * Module dependencies.
 */
 const http = require('http');
 const connect = require('connect');
 const { createProxyMiddleware } = require('http-proxy-middleware');
 
 /**
  * Configure proxy middleware
  */
 const jsonPlaceholderProxy = createProxyMiddleware({
   target: 'http://jsonplaceholder.typicode.com',
   changeOrigin: true, // for vhosted sites, changes host header to match to target's host
 });
 
 const app = connect();
 
 /**
  * Add the proxy to connect
  */
 app.use('/', jsonPlaceholderProxy); // 这里是
 
 const server = http.createServer(app).listen(8000);
 
 console.log('[DEMO] Server: listening on port 8000');

 
 process.on('SIGINT', () => server.close());
 process.on('SIGTERM', () => server.close());