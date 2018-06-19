const express = require("express");
const router = express.Router();

const education_controller = require("../controllers/educationController");

//
// ─── EDUCATIONS_ROUTES ─────────────────────────────────────────────────────────────
//

router.get("/", education_controller.list);

router.post("/", education_controller.post);

router.get("/:id", education_controller.show);

router.delete("/:id", education_controller.delete);

router.put("/:id", education_controller.update);

module.exports = router;
