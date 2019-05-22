import net from "net";

/**
 * Client class is a container for managing a client connections for 
 * fetching random integer (1-100) from server
 */
export default class Client {

  
  constructor() {
    this.client=null;
    this.numbersList = [];
  }
  /**
   * This method creates new connection and
   * retrieves random number from server socket and
   * waits until the count of received numbers will be 6
   * when the result array completed then it resolved
   */
  getNewRandomNumberFromServer() {
    
    this.numbersList = [];
    return new Promise((resolve) => {
      this.client = net.createConnection({ port: process.env.PORT }, () => {
        console.log("\nClient > connected to server.");
        this.client.write("getNewRandomNumberFromServer");

        // Retrieve random number from server socket
        this.client.on("data", data => {
          this.numbersList.push(parseInt(data));
          console.log("Client > data received from server :", data.toString());
          if (this.numbersList.length == 6) {
            console.log(
              "Client > 6 random number received from server : ",
              this.numbersList
            );
            resolve(this.numbersList);
            this.client.end("bye");
          }
        });

        this.client.on("error", err => {
          console.log("Client > Error occured : " + err);
          if (this.numbersList.length < 6) {
            // When error occured in client side and reading random numbers is not completed yet,
            // this socket tries to reconnect and continue reading numbers from server 
            this.client.connect();
          }
        });
      });
    });
  }
}
