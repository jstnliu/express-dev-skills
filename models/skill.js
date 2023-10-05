const skills = [
    {id: 123, skill: 'Falling Asleep', completed: true},
    {id: 234, skill: 'Cry and Scream', completed: true},
    {id: 345, skill: 'Calm Down from Crying and Screaming', completed: false},
    {id: 456, skill: 'Understand What Express Is', completed: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
};

function getAll() {
    return skills;
};

function getOne(id) {
    id = parseInt(id);
    let skill = skills.find(skill => skill.id === id);
    return skill;
};

function create(skill) {
    //add new skill
    skill.id = Date.now() % 1000000;
    skills.push(skill);
}

function deleteOne(id) {
    id = parseInt(id);
    //find index for skill
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}