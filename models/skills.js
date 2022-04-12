const skills = [
    {id: 000000, skill: 'CSS', known: true},
    {id: 000001, skill: 'HTML', known: true},
    {id: 000002, skill: 'Javascript', known: true},
    {id: 000003, skill: 'Python', known: false},
]; //Remember that id is currently arbitrary, there's no hash function.

module.exports = {
    getOne,
    getAll
};

function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
}

function getAll() {
    return todos;
}