const skills = [
    { id: 100000, skill: 'CSS', known: true },
    { id: 100001, skill: 'HTML', known: true },
    { id: 100002, skill: 'Javascript', known: true },
    { id: 100003, skill: 'Python', known: false },
]; //Remember that id is currently arbitrary, there's no hash function.

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
};

function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
}

function getAll() {
    return skills;
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex((skill) => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}