'use strict'

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger");

const app = express();
const router = express.Router();

mongoose.connect('mongodb+srv://user:password@tool.ibww1.mongodb.net/tool?retryWrites=true&w=majority');
const Tools = require("./models/tool");

const indexRoute = require("./routes/index-route")
const toolRoute = require("./routes/tools-route")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/', indexRoute);
app.use('/tools', toolRoute);

module.exports = app;