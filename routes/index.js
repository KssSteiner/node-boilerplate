"use strict";
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController'); //.js muss nicht angegeben werden
const aboutController = require('../controllers/aboutController');

router.get('/', (req, res) => { //Home Site
    homeController.renderHome(req, res);
});

router.get('/about', (req, res) => { //About Site
    aboutController.renderAbout(req, res);
});

module.exports = router;
