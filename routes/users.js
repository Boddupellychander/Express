var express = require('express');
var router = express.Router();
var db = require("../app");
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({ name: "Chander" });
});

module.exports = router;