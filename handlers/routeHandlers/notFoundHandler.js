const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  callback(404, {
    message: "URL 404 not found!",
  });
};

module.exports = handler;
