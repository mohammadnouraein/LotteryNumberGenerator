import dotenv from "dotenv";

//Initialize .env and maps the .env file into process.env
dotenv.config();

import Client from "./client";

let client = new Client();
client.getNewRandomNumberFromServer().then(res => {
  console.log("Client > All numbers retrieved from server : ", res);
});
