// routes/index.js
import express from "express";
import Client from "../client/client";

var router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
    res.redirect("/index.html")
  });

/* GET random numbers */
router.get("/getRandomNumbers", function(req, res) {
  let client = new Client();
  client.getNewRandomNumberFromServer().then(rndNumbers => {
    res.json(rndNumbers);
  });
});
export default router;
