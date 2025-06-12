import { Color } from "colors";
import chalk from "chalk";
import { types } from "util";


export type LogLevel = "info" | "warn" | "error";
export type LogFunction = (message: string) => void;
export type Logger = {
    log: (level: LogLevel, message: string) => void;
    info: LogFunction;
    warn: LogFunction;
    error: LogFunction;
};
export const logColors = {
    info: chalk.blue,
    warn: chalk.yellow,
    error: chalk.red,
};
export type LogConfig = {
    level: LogLevel;
    colors: Record<LogLevel, Color>;
    labels: Record<LogLevel, string>;
};

export default types;
