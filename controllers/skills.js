const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update,
};

//displays index of all skills
function index(req, res, next) {
    let skills = Skill.getAll();
    res.render('skills/index', {
        skills,
        title: 'All Skills'
    });
}

function show(req, res) {
    let skill = Skill.getOne(req.params.id)
    res.render('skills/show', {
        skill,
        title: 'Skill Details',
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

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function edit(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/edit', {
        title: 'Edit Skill',
        skill
    });
}

function update(req, res) {
    req.body.completed = !!req.body.completed;
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}