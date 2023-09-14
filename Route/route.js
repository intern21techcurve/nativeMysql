const express = require('express');
const router = express.Router();
const customerController = require('../Controller/customerClr')
const Validator = require('../service/validation')







// craete a api for enter a data
router.post('/postData',Validator.validateCustomerDetails,customerController.addData);

// show Data
router.get('/getAllData', customerController.showData);

//updated a data 

router.patch('/putData/:id',customerController.updateData);

module.exports = router;