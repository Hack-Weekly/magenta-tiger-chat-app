import { Schema, model } from 'mongoose';
import { IUser } from '../type/types';
import bcrypt from 'bcrypt';

export const UserSchema = new Schema<IUser>({
  email: {
    type: String, required: [true, 'please provide a valid email address'], index: { unique: true }
  },
  password: { type: String, required: true },
  name: { type: String }
});

UserSchema.pre<IUser>('save', async function (next: any) {
  const user = this;
  const salt_work_factor = 10;
  if (!user.isModified('password')) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(Number(salt_work_factor));
    const hashPassword = await bcrypt.hash(user.password, salt);
    user.password = hashPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

export const User = model<IUser>('User', UserSchema);