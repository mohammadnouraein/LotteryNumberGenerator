import net from "net";

export default class Server {
  server = null;
  constructor() {
    // Create server for
    this.server = net.createServer(socket => {
      socket.on("connect", () => {
        console.log("Connected");
      });
      socket.on("data", data => {
        let request = data
          .toString()
          .toLowerCase()
          .trim();
        switch (request) {
          case "getnewrandomnumber":
            console.log(Math.ceil(Math.random() * 100));
        }
      });
    });
  }

  listen(callback) {
    this.server.listen(process.env.PORT, () => {
      let addr = this.server.address();
      console.log(
        `\nServer is listening on ${addr.address} | port:${addr.port} | ${
          addr.family
        }`
      );
      if (typeof callback === "function") {
        try {
          callback();
        } catch (e) {}
      }
    });
  }
}
