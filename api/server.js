// server.js

const express        = require("express");
const app            = express();
const bodyParser     = require("body-parser");
const routes         = require("./routes")(app);

const port = 3030;

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true}));

app.use(bodyParser.json({ limit: "50mb", extended: true}));

app.listen(port, "0.0.0.0", () => {
  console.log("We are live on " + port);
})
