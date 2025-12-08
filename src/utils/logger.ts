type LogLevel = "info" | "warn" | "error" | "debug";

interface LogOptions {
  level?: LogLevel;
  tag?: string;
  trace?: boolean;
}

const LOG_COLORS: Record<LogLevel, string> = {
  info: "color: #007bff",
  warn: "color: #ffc107",
  error: "color: #dc3545",
  debug: "color: #28a745",
};
// import.meta.env.VITE_APP_REPORTING_URI;

export const logger = (
  message: string,
  data?: unknown,
  options: LogOptions = { level: "info", trace: false }
): void => {
  const env = import.meta.env.NODE_ENV || "development";
  const { level = "info", tag, trace = false } = options;

  // Skip logging in production except errors
  if (env === "production" && level !== "error") return;

  const timestamp = new Date().toISOString();
  const prefix = `%c[${level.toUpperCase()}] ${timestamp}${
    tag ? ` [${tag}]` : ""
  }:`;

  if (trace) console.trace(prefix, LOG_COLORS[level], message, data);
  else if (data !== undefined)
    console.log(prefix, LOG_COLORS[level], message, data);
  else console.log(prefix, LOG_COLORS[level], message);
};
