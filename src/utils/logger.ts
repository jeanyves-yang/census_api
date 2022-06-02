import logger from "pino";
import dayjs from "dayjs";

/**
* JSON logger to standardize log format.
*/
const log = logger({
  prettyPrint: true,
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
});

export default log;