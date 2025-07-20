import { CoreConfig } from '../types';

export function loadConfig(): CoreConfig {
  return {
    env: process.env.NODE_ENV || 'development',
    logger: { level: 'info' }
  };
}