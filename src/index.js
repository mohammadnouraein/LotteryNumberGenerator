import dotenv from "dotenv";

//Initialize .env and maps the .env file into process.env
dotenv.config();

import Server from "./server";
import Client from "./client";

let server = new Server();
server.listen(() => {
  let client = new Client();
  client.createConnection();
});
