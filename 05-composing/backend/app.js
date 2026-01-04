const express = require("express");
const restful = require("node-restful");

const server = express();
const moongose = restful.mongoose;

// DB
moongose.Promise = global.Promise;
moongose.connect("mongodb://db/mydb");

// Routing
server.get("/", (req, res) => res.send("Backend"));

server.listen(3000);
