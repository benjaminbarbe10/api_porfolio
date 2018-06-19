const Joi = require("joi");
const Skill = require("../models/skill");
const mongoose = require("mongoose");

//
// ─── SKILL_CONTROLLER ──────────────────────────────────────────────────────────
//

exports.list = (req, res) => {
  Skill.find((err, skills) => {
    if (err) res.send({ message: "internal server error" });
    res.json(skills);
  });
};

exports.post = (req, res) => {
  const { error } = validateSkill(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  Skill.create(req.body).then(function(skill) {
    res.send(skill);
  });
};

exports.show = (req, res) => {
  Skill.findById(req.params.id, (err, skill) => {
    if (!skill) return res.status(404).send("Not found");
    res.json(skill);
  });
};

exports.delete = (req, res) => {
  Skill.findByIdAndRemove(req.params.id, (err, skill) => {
    if (!skill) return res.status(404).send("Not found");
    res.send("Has been deleted");
  });
};

exports.update = (req, res) => {
  Skill.findByIdAndUpdate(req.params.id, req.body, (err, skill) => {
    if (!skill) return res.status(404).send("Not found");
    Skill.findOne({
      _id: req.params.id
    }).then(skill => {
      res.send(skill);
    });
  });
};

//
// ─── FUNCTIONS ──────────────────────────────────────────────────────────────────
//

function validateSkill(skill) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required(),
    value: Joi.number()
      .min(1)
      .required()
  };

  return Joi.validate(skill, schema);
}
