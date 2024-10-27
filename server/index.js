const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT_NUMBER;

app.listen(() => {
  console.log(`server is running on port ${PORT}`);
});
