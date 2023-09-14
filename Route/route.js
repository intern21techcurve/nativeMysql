const express = require('express');
const router = express.Router();
const customerController = require('../Controller/customerClr')

// craete a api for enter a data
router.post('/putData',customerController.putData);

// show Data
router.get('/showData', customerController.showData);

//updated a data 

router.patch('/updateData/:id',customerController.updateData);

module.exports = router;