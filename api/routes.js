// Routes

const Utils = require("./utils");

module.exports = function(app, db) {
  /*
  TODO: Store info in MongoDB Database to prevent excess calculations
  const P_to_F = db.collection("F_P");
  const F_to_P = db.collection("P_F");

  const A_to_F = db.collection("F_A");
  const F_to_A = db.collection("A_F");
  const A_to_P = db.collection("P_A");
  const P_to_A = db.collection("A_P");

  const G_to_A = db.collection("A_G");
  const G_to_P = db.collection("P_G");

  const GA_to_P = db.collection("GA_P");
  */

/******************************************************************************/
  app.get("/:type/:value/:interest/:period/:geometric?", (req, res) => {
    const i = req.params.interest/100;
    const n = req.params.period;
    const type = req.params.type;

    var result = {};
    if (req.params.geometric) {
      const geo = req.params.geometric/100;
      result.ratio = Number(Utils.calcRatio(type, i, n, geo)).toFixed(2);
    }
    else {
      result.ratio = Number(Utils.calcRatio(type, i, n)).toFixed(2);
    }
    result.value = Number(req.params.value*result.ratio).toFixed(2);

    res.send(result);
  });
};
