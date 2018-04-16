// Routes

const Utils = require("./utils");

module.exports = function(app, db) {
  const history = db.collection("history");
  const info = db.collection("info");
  const blist = db.collection("blist");
  const wlist = db.collection("wlist");
  const statusDB = db.collection("status");
  const images = db.collection("image");
  const delivery = db.collection("delivery");
/******************************************************************************/
  app.get("/history", (req, res) => {
    console.log("Hello b0ss");
    res.send("Hello b0ss")
  });
};
