const express = require('express');
const { getBanner, updateBanner } = require('../controllers/bannerController');
const router = express.Router();

router.get('/banner', getBanner);
router.post('/banner', updateBanner);

module.exports = router;
