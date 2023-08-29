const http = require("http");
const server = http.createServer((req, res) => {
  // console.log(req.url);

  if (req.url == "/") {
    // res.write("Hello this is Home page");
    // res.end();

    // or
    res.end("Hello this is Home page");
  } else if (req.url == "/contact") {
    res.end("Hello this is contact page");
  } else if (req.url == "/about") {
    res.end("Hello this is about page");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end(" <h1>Error 404 , The page does not exist </h1>");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server is running on Port 5000");
});
