const jwt = require("../../helpers/jwt/index");
module.exports = {
  verifyToken(req, res, next) {
    const { token } = req.headers;

    if (!token) {
      return res.status(400).json({ message: "No Token!" });
    }

    try {
      
    const verified = jwt.verifyToken(token);
    req.user = verified

    } catch (error) {
      return res.status(400).json(error);
    }
    next();
  },
};
