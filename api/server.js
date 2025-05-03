const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("src/data/data.json"); // Ensure the path to data.json is correct
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = (req, res) => {
  server(req, res); // Use the handler to process requests
};
