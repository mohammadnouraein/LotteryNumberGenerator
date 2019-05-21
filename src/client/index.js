import net from "net";

export default class Client {
  client = null;
  constructor() {}

  createConnection() {
    this.client = net.createConnection({ port: process.env.PORT }, () => {
      console.log("connected to server");
      setInterval(() => {
        this.client.write("getNewRandomNumber");
      }, 1000);
    });
  }
}
