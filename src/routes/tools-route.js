'use strict';

const express = require("express");
const router = express.Router();
const controller = require("../controllers/tool-controller");

router.post('/', controller.post);
router.get('/', controller.get);
router.get('/:tags', controller.getByTags);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;