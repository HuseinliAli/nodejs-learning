const port = process.argv[2] || process.PORT || 3000,
  http = require("http");

http
  .createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    res.end("<p>hello</p>");
  })
  .listen(port);
