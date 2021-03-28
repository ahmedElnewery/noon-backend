const jwt = require("jsonwebtoken");

const User = require("../model/user");

const auth = async (req, res, next) => {
  let token = "";
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.secret);
      req.user = await User.findById(decoded.id).select("-hash");

      next();
    } catch (error) {
      res.status(401).json("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401).json("Not authorized, token ")
  }
};

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).json("Not authorized as an admin");
  }
};

module.exports = { auth, admin };
