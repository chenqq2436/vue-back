const http = require("http");
let users = [
  { id: 1, name: "cehnqiang1" },
  { id: 2, name: "sunhanli2" },
  { id: 3, name: "chenfangfang3" },
  { id: 4, name: "chenyunliang4" },
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
