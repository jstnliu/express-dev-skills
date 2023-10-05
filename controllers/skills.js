const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
};

//displays index of all skills
function index(req, res, next) {
    let skills = Skill.getAll();
    res.render('skills/index', {
        skills: skills,
        title: 'All Skills'
    });
}

function show(req, res) {
    let skill = Skill.getOne(req.params.id)
    res.render('skills/show', {
        skill,
        title: 'Skills Details',
    });
}

function newSkill(req, res) {
    res.render('skills/new', {
        title: 'Add New Skill',
    });
}