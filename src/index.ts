import chalk from "chalk";

type LogLevel = "info" | "warn" | "error";

const levelColorrs = {
    info: chalk.blue,
    warn: chalk.yellow,
    error: chalk.red,
}

const levelLabels = {
    info: "BUNNY NOTE",
    warn: "BUNNY SAYS WARNING",
    error: "BUNNY ERROR",
}

function getTimestamp(): string {
    return new Date().toISOString();
}

function getTimestampWithTime(): string {
    return new Date().toLocaleTimeString();
}

function formatMessage(level: LogLevel, message: string): string {
    const timestamp = getTimestampWithTime();
    const color = levelColorrs[level];
    const label = levelLabels[level];
    return `${color(`[${timestamp}]`)} ${color(label)}: ${message}`;
}

const logger = {
    log: (level: LogLevel, message: string): void => {
        const color = levelColorrs[level];
        const label = levelLabels[level];
        console.log(`${color(`[${getTimestamp()}]`)} ${color(label)}: ${message}`);
    },

    info: (message: string): void => {
        logger.log("info", message);
    },

    warn: (message: string): void => {
        logger.log("warn", message);
    },

    error: (message: string): void => {
        logger.log("error", message);
    },
}