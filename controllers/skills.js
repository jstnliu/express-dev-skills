const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete,
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

function create(req, res) {
    console.log(req.body);
    if(req.body.completed) {
        req.body.completed = true
    } else {
        req.body.completed = false
    }
    //CRUDing data from models
    Skill.create(req.body);
    //redirect to /skills
    res.redirect('/skills');
}