const express = require("express");
const router = express.Router();

const skill_controller = require("../controllers/skillController");

//
// ─── SKILLS_ROUTES ─────────────────────────────────────────────────────────────
//

router.get("/", skill_controller.list);

router.post("/", skill_controller.post);

router.get("/:id", skill_controller.show);

router.delete("/:id", skill_controller.delete);

router.put("/:id", skill_controller.update);

module.exports = router;
