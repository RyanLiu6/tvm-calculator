// Routes

const Utils = require("./utils");

module.exports = function(app, db) {
  const P_to_F = db.collection(Utils.F_P);
  const F_to_P = db.collection(Utils.P_F);

  const A_to_F = db.collection(Utils.F_A);
  const F_to_A = db.collection(Utils.A_F);
  const A_to_P = db.collection(Utils.P_A);
  const P_to_A = db.collection(Utils.A_P);

  const G_to_A = db.collection(Utils.A_G);
  const G_to_P = db.collection(Utils.P_G);

  const GG_to_P = db.collection(Utils.P_GG);

/******************************************************************************/
  app.put("/money", (req, res) => {
    const jsonData = req.body;
    const ratio = Utils.calcRatio(jsonData);

    res.send(ratio);
  });
};
