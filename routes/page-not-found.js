﻿const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

router.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir, 'views', 'page-not-found.html'));
})

module.exports = router;