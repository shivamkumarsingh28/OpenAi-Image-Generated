const express = require('express');
const { generateImage } = require('../controllers/openaiController');
// const { maskImage } = require('../controllers/maskImage');
const router = express.Router();

router.post('/generateimage', generateImage);
// router.post('/maskimage', maskImage);

module.exports = router;
