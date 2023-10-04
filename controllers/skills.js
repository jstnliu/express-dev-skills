const Skill = require('../models/skill');

modules.exports = {
    index,
    show,
};

//displays index of all skills
function index(req, res, next) {
    let skills = Skill.getAll();
    res.render('skills2/index', {
        skills
    });
}

function show(req, res) {
    let skill = Skill.getOne(req.params.id)
    res.render('skills2/show', {
        skill
    });
}