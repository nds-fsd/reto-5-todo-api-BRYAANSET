const express = require('express');
const todoRouter = require ('./todo');


const router = express.Router();

router.use('/',todoRouter);


module.exports = router;