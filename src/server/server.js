import net from "net";

/**
 * Server class is a container for managing a server socket for 
 * providing random integer (1-100) for serving on process.env.PORT port 
 */
export default class Server {
  server = null;

  constructor() {
    this.createServer();
  }

  /**
   * This method creates a new Server (net.Server) and assign it to local server field
   */
  createServer() {
    // Create server for
    this.server = net.createServer(socket => {
      // When error in socket occures
      socket.on("error", error => {
        console.log("Server > Error occured : " + error);
        this.server.close();
      });

      // When timout of socket occures
      socket.on("timeout", () => {
        console.log("Server > Socket timed out !");
        socket.end("Timed out!");
        // can call socket.destroy() here too.
      });

      // When client closes the connection
      socket.on("end", data => {
        console.log("Server > Socket ended from client!");
      });

      // When socket closes
      socket.on("close", error => {
        var bread = socket.bytesRead;
        var bwrite = socket.bytesWritten;

        console.log("Server > Bytes read : " + bread);
        console.log("Server > Bytes written : " + bwrite);
        console.log("Server > Socket closed!");

        // If socket closed because of an error
        if (error) {
          console.log(
            "Server > Socket was closed coz of transmission error : " + error
          );
        }
      });

      // When socket receives data
      socket.on("data", data => {
        let request = data.toString();

        // Checks the received data from client to select the response
        switch (request) {

          // Client requests for random number
          case "getNewRandomNumberFromServer":

            // Server creates an interval for generating new random number and writes the result to client
            let intervalId = setInterval(() => {

              // If the socket is writable then we write a new random number to client
              // maybe the client has closed the connection, then the socket is not writable
              if (socket.writable) {
                let newRandomNumber = Math.ceil(Math.random() * 100);
                socket.write(newRandomNumber.toString());
              } else {
                
                // We clear the interval when the socket is not writable
                clearInterval(intervalId);
              }

              // The interval value is configurable in .env file.
            }, process.env.GENERATION_TIMOUT);
        }
      });
    });

    // Emitted when server closes ...
    // Not emitted until all connections closes.
    this.server.on("close", () => {
      console.log("Server > Server closed !");
    });

    // Emitted when error occures
    this.server.on("error", e => {
      console.log("Server > error : ", e);
    });
  }

  /**
   *  Server starts to listen
   */
  listen(callback) {
    this.server.listen(process.env.PORT, () => {
      let addr = this.server.address();
      console.log(
        `\nServer > Is listening on ${addr.address} | port:${addr.port} | ${
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
