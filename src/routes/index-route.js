'use strict'

const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    title: "Tools",
    version: "1.0"
  });
});

module.exports = router;