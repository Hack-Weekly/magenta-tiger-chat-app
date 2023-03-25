import * as dotenv from "dotenv";
dotenv.config();

import { Config } from "./type/types";

export const config: Config = {
  port: 8089,
  dbUrl: process.env.MONGODB_CONNECTION,
};
