import { Request, Response } from 'express';
import { Document } from 'mongoose';


export interface Config {
    port: Number
    dbUrl: string
}

export interface AuthController {
    createUser(req: Request, res: Response): Promise<Response>
    login(req: Request, res: Response): Promise<Response>
}

export interface IUser extends Document{
    email: string,
    password: string,
    name: string,
}
