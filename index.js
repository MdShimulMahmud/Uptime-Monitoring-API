// module exports

const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
const enviromnent = require("./helpers/environment");
// app object - module scaffolding
const app = {};

// create server

app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(enviromnent.port, () => {
    console.log(`Listening to port at ${enviromnent.port}`);
  });
};

// handle request response

app.handleReqRes = handleReqRes;
// listening app

app.createServer();
