import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    res.json({ success: false, message: "Not Authorized Login Again" });
  }

  try {
    const token_decoder = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decoder.id;
    next();
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "error" });
  }
};

export default authMiddleware;
