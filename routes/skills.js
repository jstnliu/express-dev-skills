const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');

/* GET users listing. */
//GET /skills
//localhost:3000/skills
router.get('/', skillsCtrl.index);
//GET /skills/new
//localhost:3000/skills/new
//always goes before 'show'
router.get('/new', skillsCtrl.new);
//GET /skills/:id
//localhost:3000/skills/:id
router.get('/:id', skillsCtrl.show);
//POST /skills
router.post('/', skillsCtrl.create);
//DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete)

module.exports = router;
