// Core configuration types
export interface LoggerConfig {
  level: 'debug' | 'info' | 'warn' | 'error';
  prefix?: string;
  timestamp?: boolean;
}

export interface CoreConfig {
  env: 'development' | 'production' | 'test';
  logger: LoggerConfig;
  apiBaseUrl?: string;
}

// UI component types
export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export interface ButtonProps {
  label: string;
  onClick: (event: Event) => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
}

// Generic utility types
export type NonEmptyArray<T> = [T, ...T[]];
export type Optional<T> = T | undefined | null;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Environment type
export type Environment = 'development' | 'production' | 'test';