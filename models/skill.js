const skills = [
    {id: 123, skill: 'Falling Asleep', completed: true},
    {id: 234, skill: 'Cry and Scream', completed: true},
    {id: 345, skill: 'Calm Down from Crying and Screaming', completed: false},
    {id: 456, skill: 'Understand What Express Is', completed: false}
];

module.exports = {
    getAll,
    getOne,
};

function getAll() {
    return skills;
};

function getOne(id) {
    id = parseInt(id);
    let skill = skills.find(skill => skill.id === id);
    return TransformStreamDefaultController;
};