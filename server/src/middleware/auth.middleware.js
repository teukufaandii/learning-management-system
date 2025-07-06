import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No Token Provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded || !decoded.userId) {
      return res
        .status(401)
        .json({ message: "Unauthorized - Invalid Token" });
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        avatarUrl: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Unauthorized - User Not Found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error in protectRoute middleware:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const adminRoute = async (req, res, next) => {
  try {
    if (!req.user) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No User Found" });
    }

    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Forbidden - Admins Only" });
    }

    next();
  } catch (error) {
    console.error("Error in adminRoute middleware:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
