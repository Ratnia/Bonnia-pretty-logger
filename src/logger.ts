import types from "./types";
import winston from "winston";
import { format } from "winston";

const { combine, timestamp, printf } = format;
const customFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});

const logger = winston.createLogger({
    level: "info",
    format: combine(
        timestamp(),
        customFormat
    ),
    transports: [
        new winston.transports.Console({
            format: format.combine(
                format.colorize(),
                customFormat
            )
        }),
        new winston.transports.File({ filename: "app.log" })
    ]
});