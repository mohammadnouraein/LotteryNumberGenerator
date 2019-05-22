import dotenv from "dotenv";

//Initialize .env and maps the .env file into process.env
dotenv.config();

import Server from "./server";

// Initialize a new Server for serving random numbers
let server = new Server();
server.listen(() => {

});
