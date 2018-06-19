const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//
// ─── SKILL_MODEL ────────────────────────────────────────────────────────────────
//

const SkillSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name field is required"]
    },
    value: {
      type: Number,
      required: [true, "value field is required"]
    }
  },
  {
    versionKey: false
  }
);

const Skill = mongoose.model("skill", SkillSchema);
module.exports = Skill;
