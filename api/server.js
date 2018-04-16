// server.js

const app            = express();
const express        = require("express");
const bodyParser     = require("body-parser");
const routes         = require("./routes")(app, db);

const port = 3030;

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true}));

app.use(bodyParser.json({ limit: "50mb", extended: true}));

app.listen(port, "0.0.0.0", () => {
  console.log("We are live on " + port);
})
