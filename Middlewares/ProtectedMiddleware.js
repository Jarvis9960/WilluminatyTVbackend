import UserModel from "../Models/UsersModel.js";
import jwt from "jsonwebtoken";

export const protectedRoute = async (req, res, next) => {
  try {
    if (req.cookies.token) {
      const { token } = req.cookies;

      const verifyToken = await jwt.verify(token, process.env.JWTSECREAT);

      if (verifyToken) {
        const user = await UserModel.findOne({ _id: verifyToken._id }).select(
          "-Password"
        );

        if (!user) {
          return res
            .status(401)
            .json({ status: false, message: "Invalid Auth: User not found" });
        }

        req.user = user;

        return next();
      }
    }

    res.status(401).json({ error: "Unauthorized user please login first" });
  } catch (error) {
    console.log(error)
    return res.status(401).json({ status: false, message: " Invalid Auth" });
  }
};