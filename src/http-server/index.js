// app.js
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "./routes";
const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../../public")));
app.use("/", indexRouter);

app.listen(process.env.HTTP_SERVER_PORT || 3000, () => {
  console.log(
    `Http Server > listening on port ${process.env.HTTP_SERVER_PORT || 3000}`
  );
});
