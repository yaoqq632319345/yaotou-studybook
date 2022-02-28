const http = require('http');

http.createServer((req, res) => {
  res.write('ok')
  res.end()
}).listen(80);