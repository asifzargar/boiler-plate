/** Log levels */
export type LogLevel = "log" | "warn" | "error";

/** The App environment */
export type Environment = "development" | "production";

export const APP_ENV: Environment =
  //@ts-ignore
  import.meta?.env?.VITE_APP_ENV === "production"
    ? "production"
    : "development";

export const LOG_LEVEL: LogLevel = APP_ENV === "production" ? "warn" : "log";
