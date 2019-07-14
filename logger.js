'use strict';

/**
 * Super simple middleware that just logs out its existence.
 * @param req
 * @param res
 * @param next
 */
module.exports = (req, res, next) => {
  console.log(`\x1b[35m Logging some stuff \n method: \x1b[33m ${req.method} \n\x1b[35m path: \x1b[33m ${req.path} \n\x1b[35m request time: \x1b[33m ${req.requestTime} \x1b[0m`);
  next();
};
