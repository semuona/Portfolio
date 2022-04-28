const express = require("express");

const app = express();

require("dotenv").config();

const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.use(express.json());
app.use("/message", require("./api/message"));
const connectToDb = require("./config/db");
connectToDb();

app.use(express.static("./server/uploads"));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log("server is up and running at port", port));
