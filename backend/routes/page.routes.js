import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import MentorApplication from "../models/MentorApplication.js";

const router = express.Router();

/* =====================
   PUBLIC PAGES
===================== */
console.log("✅ page.routes.js NEW VERSION LOADED");

router.get("/", (req, res) => {
  console.log("🔥 HOME ROUTE HIT");
  res.render("pages/index", { user: req.session.user });
});

router.get("/aboutus", (req, res) => {
  res.render("pages/aboutus", { user: req.session.user });
});

/* ===== CUET ===== */
router.get("/cuetcard", (req, res) =>
  res.render("pages/cuetcard", { user: req.session.user })
);
router.get("/cuetpyq", (req, res) =>
  res.render("pages/cuetpyq", { user: req.session.user })
);
router.get("/cuettest", (req, res) =>
  res.render("pages/cuettest", { user: req.session.user })
);
router.get("/cuetnotes", (req, res) =>
  res.render("pages/cuetnotes", { user: req.session.user })
);

/* ===== GATE ===== */
router.get("/gatecard", (req, res) =>
  res.render("pages/gatecard", { user: req.session.user })
);
router.get("/gatepyq", (req, res) =>
  res.render("pages/gatepyq", { user: req.session.user })
);
router.get("/gatetext", (req, res) =>
  res.render("pages/gatetext", { user: req.session.user })
);
router.get("/gatenotes", (req, res) =>
  res.render("pages/gatenotes", { user: req.session.user })
);

/* ===== JEE ===== */
router.get("/jee", (req, res) =>
  res.render("pages/jee", { user: req.session.user })
);
router.get("/jeecard", (req, res) =>
  res.render("pages/jeecard", { user: req.session.user })
);
router.get("/jeemaintext", (req, res) =>
  res.render("pages/jeemaintext", { user: req.session.user })
);
router.get("/jeenotes", (req, res) =>
  res.render("pages/jeenotes", { user: req.session.user })
);

/* ===== NEET ===== */
router.get("/neet", (req, res) =>
  res.render("pages/neet", { user: req.session.user })
);
router.get("/neetcard", (req, res) =>
  res.render("pages/neetcard", { user: req.session.user })
);
router.get("/neettext", (req, res) =>
  res.render("pages/neettext", { user: req.session.user })
);
router.get("/neetnotes", (req, res) =>
  res.render("pages/neetnotes", { user: req.session.user })
);
router.get("/neettest", (req, res) =>
  res.render("pages/neettest", { user: req.session.user })
);

/* ===== NIMCET ===== */
router.get("/nimcet", (req, res) =>
  res.render("pages/nimcet", { user: req.session.user })
);
router.get("/nimcetcard", (req, res) =>
  res.render("pages/nimcetcard", { user: req.session.user })
);
router.get("/nimcetmock1", (req, res) =>
  res.render("pages/nimcetmock1", { user: req.session.user })
);
router.get("/nimcettest", (req, res) =>
  res.render("pages/nimcettest", { user: req.session.user })
);
router.get("/nimcetnotes", (req, res) =>
  res.render("pages/nimcetnotes", { user: req.session.user })
);

/* ===== UPSC ===== */
router.get("/upsccard", (req, res) =>
  res.render("pages/upsccard", { user: req.session.user })
);
router.get("/upscpyq", (req, res) =>
  res.render("pages/upscpyq", { user: req.session.user })
);
router.get("/upsctext", (req, res) =>
  res.render("pages/upsctext", { user: req.session.user })
);
router.get("/upscnotes", (req, res) =>
  res.render("pages/upscnotes", { user: req.session.user })
);

/* =====================
   PROTECTED PAGES
===================== */
router.get("/main", authMiddleware, (req, res) => {
  res.render("pages/main", { user: req.session.user });
});

router.get("/main1", authMiddleware, (req, res) => {
  res.render("pages/main1", { user: req.session.user });
});

router.get("/main2", authMiddleware, (req, res) => {
  res.render("pages/main2", { user: req.session.user });
});

router.get("/mentor", authMiddleware, (req, res) => {
  res.render("pages/mentor", { user: req.session.user });
});

/* =====================
   APPLICATION FORM
===================== */
router.post("/apply", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    await MentorApplication.create({ name, email, message });
    res.send("Application submitted successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error submitting application");
  }
});

export default router;
