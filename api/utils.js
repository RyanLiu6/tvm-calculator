
const errMsg = { "Error" : "An error has occured" };

const F_P = "F/P";
const P_F = "P/F";

const F_A = "F/A";
const A_F = "A/F";
const P_A = "P/A";
const A_P = "A/P";

const A_G = "A/G";
const P_G = "P/G";

const P_GG = "P/GG";

exports.getObjCallback = function(res, err, output) {
  if (err) {
    res.send(errMsg);
  }
  else {
    // Prune the JSON array to get rid of the ID field
    pruneArray(output);
    res.send(output[0]);
  }
};

exports.calcRatio = function(jsonData) {
  type = jsonData["type"];
  interest = jsonData["interest"];
  period = jsonData["period"];

  switch(type) {
    case "F/P":
      return P_to_F(interest, period);
    case "P/F":
      return F_to_P(interest, period);

    case "F/A":
      return A_to_F(interest, period);
    case "A/F":
      return F_to_A(interest, period);
    case "P/A":
      return A_to_P(interest, period);
    case "A/P":
      return P_to_A(interest, period);

    case "A/G":
      return G_to_A(interest, period);
    case "P/G":
      return G_to_P(interest, period);

    case "P/GG":
      return GG_to_P(interest, jsonData["Geometric"], period);
  }
}

function P_to_F(i, n) {
  return Math.pow(1 + i, n);
}

function F_to_P(i, n) {
  return Math.pow(1 + i, -n);
}

function F_to_A(i, n) {
  top = Math.pow(1 + i, n) - 1;
  bot = i;

  return top/bot;
}

function A_to_F(i, n) {
  top = i;
  bot = Math.pow(1 + i, n) - 1;

  return top/bot;
}

function P_to_A(i, n) {
  top = Math.pow(1 + i, n) - 1;
  bot = i*Math.pow(1 + i, n);

  return top/bot;
}

function A_to_P(i, n) {
  top = i*Math.pow(1 + i, n);
  bot = Math.pow(1 + i, n) - 1;

  return top/bot;
}

function G_to_A(i, n) {
  top = Math.pow(1 + i, n) - i*n - 1;
  bot =i*Math.pow(1 + i, n) - i;

  return top/bot;
}

function G_to_P(i, n) {
  top = Math.pow(1 + i, n) - i*n - 1;
  bot = i*i*Math.pow(1 + i, n);

  return top/bot;
}

function GA_to_P(i, g, n) {
  if (i == g) {
    return n*Math.pow(1 + i, -1);
  }
  else {
    top = 1 - Math.pow(1 + i, -1)*Math.pow(1 + g, n);
    bot = i - g;

    return top/bot;
  }
}

function pruneArray(arr) {
  arr.forEach(entry => {
    delete(entry["_id"]);
  });
}
