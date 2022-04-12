const Skills = require('../models/skills');

module.exports = {
    index,
    show
};

function show(req, res) {
    const skill = Skills.getOne(req.params.id);
    res.render('skills/show', { skill });
}

function index(req, res) {
    const skills = Skills.getAll();
    res.render('skills/index', { skills });
}