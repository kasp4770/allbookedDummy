const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

router.get('/', companyController.list);
router.get('/locationX=:X&Y=:Y', companyController.findByLocation);

module.exports = router;