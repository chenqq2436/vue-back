const http = require("http");
let users = [
  { id: 1, name: "1cehnqiang1111" },
  { id: 2, name: "2sunhanli2111" },
  { id: 3, name: "3chenfangfang3111" },
  { id: 4, name: "4chenyunliang4111" },
  { id: 5, name: "5陈强5111" },
  { id: 6, name: "6孙韩丽61111" },
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
