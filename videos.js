const express = require('express');
const router = express.Router();
const controller = require("../controllers/videos");

router.get('/videos', controller.showVideo);
router.get('/video/:id', controller.showVideoById);

module.exports = router;