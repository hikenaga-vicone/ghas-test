const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const name = queryObject.name;

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<h1>Hello, ${name}</h1>`); // ← XSS 脆弱性：ユーザー入力をHTMLに直書き
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
