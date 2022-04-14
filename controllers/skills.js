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

function create(req, res) {
    Skills.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    // When data has been changed, we redirect (POST, PUT, DELETE requests)
    res.redirect('/skills');  // Provide the PATH, not a template when redirecting
}