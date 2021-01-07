const http = require("http");
let users = [
  { id: 1, name: "......a1-" },
  { id: 2, name: "b2+" },
  { id: 3, name: "c3-" },
  { id: 4, name: "d4+" },
  { id: 5, name: "e5-" },
  { id: 6, name: ".....f6+" },
];
const server = http.createServer(function (req, res) {
  // 解决跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.url === "/api/users") {
    res.end(JSON.stringify(users));
  } else {
    res.end("Not Found");
  }
});
server.listen(3000, () => {
  console.log("后端接口服务器已经启动在3000端口");
});
