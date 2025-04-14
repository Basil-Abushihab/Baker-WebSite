const jwt = require("jsonwebtoken");
require("dotenv").config();
const auth = (req, res, next) => {
  const cookie = req.cookies;
  
  try {
    if (cookie) {
      const token = cookie.token;
      const secret = process.env.JWT_SECRET;
      const decoded = jwt.verify(token, secret);
      console.log(decoded);
      req.user = decoded;
      next();
    } else {
      res.status(401).json({ message: "Unauthorized", authorized: false });
    }
  } catch (e) {
    console.log(e);
    res
      .status(401)
      .json({ message: "Unauthorized", error: e, authorized: false });
  }
};

module.exports = auth;
