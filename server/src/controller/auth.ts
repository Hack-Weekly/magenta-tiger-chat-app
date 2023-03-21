import { Request, Response } from 'express';
import { AuthController } from "../type/types";
import { User } from '../models/user.model';
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export class Auth implements AuthController {

  // Create a User
  async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password } = req.body;
      let user = await User.findOne({ email: email });
      if (user) {
        return res.json({ status: 401, message: 'email already in use' });
      }
      user = new User({
        name: name,
        email: email,
        password: password,
      });
      await user.save();
      return res.status(200).json({ message: 'user created succesfully', user: user });
    } catch (error) {
      console.log(error);
      return res.status(200).json({ message: 'failed to create a new user', });
    }
  };

  // Login a user
  async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      const compare = await bcrypt.compare(password, user.password);
      if (compare) {
        const token = jwt.sign({ user }, "secrete", { expiresIn: '30d' });
        return res.json({ status: 200, token: token });
      }
      return res.json({ message: 'wrong password' })
    } else {
      return res.json({ status: 401, message: 'user not found' });
    }
  }

}