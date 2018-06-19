const Joi = require("joi");
const Education = require("../models/education");
const mongoose = require("mongoose");

//
// ─── EDUCATION_CONTROLLER ──────────────────────────────────────────────────────────
//

exports.list = (req, res) => {
  Education.find((err, educations) => {
    if (err) res.send({ message: "internal server error" });
    res.json(educations);
  });
};

exports.post = (req, res) => {
  const { error } = validateEducation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  Education.create(req.body).then(function(education) {
    res.send(education);
  });
};

exports.show = (req, res) => {
  Education.findById(req.params.id, (err, education) => {
    if (!education) return res.status(404).send("Not found");
    res.json(education);
  });
};

exports.delete = (req, res) => {
  Education.findByIdAndRemove(req.params.id, (err, education) => {
    if (!education) return res.status(404).send("Not found");
    res.send("Has been deleted");
  });
};

exports.update = (req, res) => {
  Education.findByIdAndUpdate(req.params.id, req.body, (err, education) => {
    if (!education) return res.status(404).send("Not found");
    Education.findOne({ _id: req.params.id }).then(education => {
      res.send(education);
    });
  });
};

//
// ─── FUNCTIONS ──────────────────────────────────────────────────────────────────
//

function validateEducation(education) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required(),
    place: Joi.string()
      .min(1)
      .required()
  };

  return Joi.validate(education, schema);
}
