var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills');

/* GET users listing. */
//localhost:3000/skills
router.get('/', skillsCtrl.index);
//localhost:3000/skills/:id
router.get('/:id', skillsCtrl.show);

module.exports = router;
