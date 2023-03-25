import { Request, Response } from "express";
import { User } from "../models/user.model";
import { UserController } from "../type/types";

export class Users implements UserController {
  // Get all users
  async getAllUser(req: Request, res: Response): Promise<Response> {
    const data = await User.find();

    if (!data) {
      return res.json({ status: 401, message: "user not found" });
    }

    return res.json(data);
  }

  // Edit username
  async editUsername(req: Request, res: Response): Promise<Response> {
    const newUsername = req.body;
    const userId = req.params.id;

    const user = await User.findOneAndUpdate(
      { _id: userId },
      { username: newUsername },
      { new: true }
    );

    if (!user) {
      return res.json({ status: 404, message: "User not found" });
    }

    if (user) {
      return res.json({
        status: 200,
        message: "Username changed successfully",
        user,
      });
    } else {
    }
  }
}
