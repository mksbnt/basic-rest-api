const http = require("http");
const app = require("./app");
const chalk = require("chalk");

const log = console.log;
const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () =>
  log(
    chalk.blue("[server] started at port: ") + chalk.blue.bold(`${port}`)
  )
);
