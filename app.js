const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const shopRoute = require("./routes/shop");

const port = 8000;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use(shopRoute);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
