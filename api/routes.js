// Routes

const Utils = require("./utils");

module.exports = function(app) {
/******************************************************************************/
  app.get("/history", (req, res) => {
    console.log("Hello b0ss");
    res.send("Hello b0ss")
  };
};
