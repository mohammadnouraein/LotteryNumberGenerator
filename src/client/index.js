

import Client from "./client";

let client = new Client();
client.getNewRandomNumberFromServer().then(res => {
  console.log("Client > All numbers retrieved from server : ", res);
});
