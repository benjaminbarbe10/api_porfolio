const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//
// ─── BD CONNECTION ──────────────────────────────────────────────────────────────
//

mongoose.connect("mongodb://localhost:27017/api-portfolio");
mongoose.Promise = global.Promise;

//
// ─── ROUTES ─────────────────────────────────────────────────────────────────────
//
const skills = require("./routes/skill");
app.use(bodyParser.json());
app.use("/skills", skills);

//
// ─── SERVER ─────────────────────────────────────────────────────────────────────
//

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
