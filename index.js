// module exports

const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");

// app object - module scaffolding
const app = {};

// configuration
app.config = {
  port: 3000,
};

// create server

app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`Listening to port at ${app.config.port}`);
  });
};

// handle request response

app.handleReqRes = handleReqRes;
// listening app

app.createServer();
