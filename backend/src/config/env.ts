import "dotenv/config";

type EnvConfig = {
  NODE_ENV: "development" | "production";
  API_PORT: number;
};

function getEnvVar(key: keyof EnvConfig): string {
  const value = process.env[key];
  if (value === undefined) {
    throw new Error(`Environment variable ${key} is not set`);
  }
  return value;
}

function parseEnvVar<T>(key: keyof EnvConfig, parser: (value: string) => T): T {
  const value = getEnvVar(key);
  try {
    return parser(value);
  } catch (_) {
    throw new Error(`Failed to parse environment variable ${key}`);
  }
}

export const env: EnvConfig = {
  NODE_ENV: parseEnvVar("NODE_ENV", (value) => {
    if (value !== "development" && value !== "production") {
      throw new Error("NODE_ENV must be either 'development' or 'production'");
    }
    return value;
  }),
  API_PORT: parseEnvVar("API_PORT", (value) => {
    const port = parseInt(value, 10);
    if (isNaN(port)) {
      throw new Error("PORT must be a number");
    }
    return port;
  }),
};

Object.freeze(env);
