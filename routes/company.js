const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

router.get('/', companyController.list);
router.get('/location', companyController.findByLocation);

module.exports = router;