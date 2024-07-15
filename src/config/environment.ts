import dotenv from "dotenv";
import { resolve } from "path";

export const loadEnvVariables = () => {
  const path = resolve(__dirname, "..", "..", getEnvFileName());
  dotenv.config({ path });
};

const getEnvFileName = () => {
  const { NODE_ENV: env } = process.env;

  if (!env) {
    throw new Error("'NODE_ENV' is not set");
  }

  // return env.toLocaleLowerCase() === "prod" ? ".env.prod" : ".env.dev";
  return ".env";
};
