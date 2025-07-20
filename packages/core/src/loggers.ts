import { LoggerConfig } from './types';

export class Logger {
  private config: LoggerConfig;

  constructor(config: LoggerConfig = { level: 'info' }) {
    this.config = config;
  }

  log(message: string) {
    if (this.config.prefix) {
      console.log(`[${this.config.prefix}] ${message}`);
    } else {
      console.log(message);
    }
  }
}
