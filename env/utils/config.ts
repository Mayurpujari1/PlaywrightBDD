import * as dotenv from "dotenv";
import * as path from "path";
const environment = process.env.ENV || "dev";
dotenv.config({ path: path.resolve(__dirname, `../.env.${environment}`) });
export const Config = {
  baseUrl: process.env.BASE_URL || "https://saucedemo.com",
  username: process.env.SAUCE_USERNAME || "standard_user",
  password: process.env.SAUCE_PASSWORD || "secret_sauce",
  environment: environment.toUpperCase(),
};
