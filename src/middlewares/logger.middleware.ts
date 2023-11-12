import fs from 'fs';
import path from 'path';
import { Request, Response, NextFunction } from 'express';
const HttpLogger = (req: Request, res: Response, next: NextFunction) => {
  const logData = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;

  /**
   * @Choose folder where you want save log file
   */
  const logFolder = './src/logs';

  if (!fs.existsSync(logFolder)) {
    fs.mkdirSync(logFolder);
  }

  const currentDate = new Date().toISOString().slice(0, 10);

  const logFileName = `Logs-${currentDate}.log`;

  const logFilePath = path.join(logFolder, logFileName);

  fs.appendFile(logFilePath, logData, (err) => {
    if (err) {
      console.error('Error logging request:', err);
    }
  });

  next();
};

export default HttpLogger;
