const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const seedDB = require('../controllers/seedDB');

router.get('/', indexController.index);
router.get('/latitudeY=:Y&longitudeX=:X', indexController.getSearch);
router.get('/seedDB', seedDB.seed);

module.exports = router;