import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Expecting: "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // ✅ Fixed typo here
    req.user = decoded; // Attach user info (e.g., id) to request
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token." });
  }
};

export default authMiddleware;
