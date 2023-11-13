import { cleanEnv, str, port } from 'envalid';

function validateEnv(): void {
  cleanEnv(process.env, {
    PORT: port({ default: 3000 }),
    NODE_ENV: str({
      choices: ['development', 'production'],
    }),
    DATABASE_URL: str(),
    DIRECT_URL: str(),
  });
}

export default validateEnv;
