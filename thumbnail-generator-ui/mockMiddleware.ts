/**
 * Simple middleware to prevent json-server from overwriting db.json values whenever a POST
 * request is received.
 */
module.exports = (req, res, next) => {
  if (req.method === "POST") {
    req.method = "GET";
  }
  next();
};
