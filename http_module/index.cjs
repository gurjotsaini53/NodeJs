const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url == "/") {
    res.write("Hello From the server");
    res.end();
  }

  if (req.url == "/contact") {
    res.write("This is contact page");
    res.end();
  }
  if (req.url == "/about") {
    res.write("This is about page");
    res.end();
  } else {
    res.end();
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server is running on Port 5000");
});
