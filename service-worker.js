// 监听客户端发过来的message
self.addEventListener("message", function (event) {
  // 处理接收到的消息
  const message = event.data;
  console.log("SW接收到客户端的消息：", message);

  // 向所有客户端页面发送消息
  self.clients.matchAll().then(function (clients) {
    clients.forEach(function (client) {
      client.postMessage(message);
    });
  });
});
