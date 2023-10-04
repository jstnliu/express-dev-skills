const Skill = require('../models/skill');

modules.exports = {
    index,
    show,
};

//displays index of all skills
function index(req, res, next) {
    let skills = Skill.getAll();
    res.render('skills/index', {
        skills
    });
}

function show(req, res) {
    let todo = Skill.getOne(req.params.id)
    res.render('skills/show', {
        skill
    });
}