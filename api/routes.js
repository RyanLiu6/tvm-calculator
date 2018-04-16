// Routes

const Utils = require("./utils");

module.exports = function(app, db) {
  const F_P = db.collection("image");
  const P_F = db.collection("delivery");
/******************************************************************************/
  app.get("/history", (req, res) => {
    console.log("Hello b0ss");
    res.send("Hello b0ss")
  });
};
