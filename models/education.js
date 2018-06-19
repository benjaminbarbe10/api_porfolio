const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//
// ─── EDUCATION_MODEL ────────────────────────────────────────────────────────────────
//

const EducationSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name field is required"]
    },
    place: {
      type: String,
      required: [true, "place field is required"]
    },
    Date: {
      type: Date,
      default: Date.now
    }
  },
  {
    versionKey: false
  }
);

const Education = mongoose.model("education", EducationSchema);
module.exports = Education;
