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
}
