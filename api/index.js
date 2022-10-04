var express = require("express");
require("dotenv").config();
const { recoverPersonalSignature } = require("eth-sig-util");
const { bufferToHex } = require("ethereumjs-util");

const { default: Axios } = require("axios");

var cudlRouter = require("./cudl");

storage = new (require("../etl/utils/storage"))({
  user: process.env.NFT20_DB_USER,
  host: process.env.NFT20_DB_HOST,
  database: "verynifty",
  password: process.env.NFT20_DB_PASSWORD,
  port: 25061,
  ssl: true,
  ssl: { rejectUnauthorized: false },
});

var cors = require("cors");
var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/cudl", cudlRouter);

app.listen(7878);

module.exports = app;
