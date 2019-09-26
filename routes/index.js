const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.index);
router.get('/latitudeY=:Y&longitudeX=:X', indexController.getSearch)

module.exports = router;