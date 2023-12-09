import { ConsoleLogger, Logger } from "@/helpers";

class BaseService {
  logger: Logger = new ConsoleLogger();

  constructor() {}
}

export { BaseService };
