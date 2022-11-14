const jwt = require("jsonwebtoken");
const TOKEN_KEY =
  "ts_!eGOwbXsotM2yZBs2uj?JM2OrD47r1yWB6DGjbe8aWHT/inyENzyTpg/WTZw3";
exports.generateToken = (user) => {
  return jwt.sign({ userID: user.id, admin: user.admin }, TOKEN_KEY, {
    expiresIn: "24h",
  });
};
