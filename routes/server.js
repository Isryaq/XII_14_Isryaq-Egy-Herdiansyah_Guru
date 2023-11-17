const express = require('express')
const router = express.Router()
const gurucontroller = require('../controllers/teachercontoller')

router.get('/teachers', gurucontroller.getteachers);

router.get('/teachers/:id', gurucontroller.getbyid);

router.post('/teachers/add', gurucontroller.addteachers);

router.put('/update/:id', gurucontroller.update);

router.delete('/delete/:id', gurucontroller.deleteteachers);

module.exports = router;