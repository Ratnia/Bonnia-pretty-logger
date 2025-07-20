import { types } from "util";

export interface LoggerConfig {
  level: 'debug' | 'info' | 'warn' | 'error';
  prefix?: string;
}

export interface CoreConfig {
  env: string;
  logger: LoggerConfig;
}

export default types;
