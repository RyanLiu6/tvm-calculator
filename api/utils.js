
const errMsg = { "Error" : "An error has occured" };

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

exports.calcRatio = function(type, interest, period, geometric = 0) {
  switch(type) {
    case "P_to_F":
      return P_to_F(interest, period);
    case "F_to_P":
      return F_to_P(interest, period);

    case "A_to_F":
      return A_to_F(interest, period);
    case "F_to_A":
      return F_to_A(interest, period);
    case "A_to_P":
      return A_to_P(interest, period);
    case "P_to_A":
      return P_to_A(interest, period);

    case "G_to_A":
      return G_to_A(interest, period);
    case "G_to_P":
      return G_to_P(interest, period);

    case "GA_to_P":
      return GA_to_P(interest, geometric, period);
  }
};

function P_to_F(i, n) {
  return Math.pow(1 + i, n);
};

function F_to_P(i, n) {
  return Math.pow(1 + i, -n);
};

function F_to_A(i, n) {
  top = i;
  bot = Math.pow(1 + i, n) - 1;

  return top/bot;
};

function A_to_F(i, n) {
  top = Math.pow(1 + i, n) - 1;
  bot = i;

  return top/bot;
};

function P_to_A(i, n) {
  top = i*Math.pow(1 + i, n);
  bot = Math.pow(1 + i, n) - 1;

  return top/bot;
};

function A_to_P(i, n) {
  top = Math.pow(1 + i, n) - 1;
  bot = i*Math.pow(1 + i, n);

  return top/bot;
};

function G_to_A(i, n) {
  top = Math.pow(1 + i, n) - i*n - 1;
  bot =i*Math.pow(1 + i, n) - i;

  return top/bot;
};

function G_to_P(i, n) {
  top = Math.pow(1 + i, n) - i*n - 1;
  bot = i*i*Math.pow(1 + i, n);

  return top/bot;
};

function GA_to_P(i, g, n) {
  if (i == g) {
    return n*Math.pow(1 + i, -1);
  }
  else {
    top = 1 - Math.pow(1 + g, n)*Math.pow(1 + i, -n);
    bot = i - g;

    return top/bot;
  }
};

function pruneArray(arr) {
  arr.forEach(entry => {
    delete(entry["_id"]);
  });
};
