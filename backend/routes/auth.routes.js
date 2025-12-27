const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const router = express.Router();

/* =====================
   AUTH PAGES
===================== */
router.get("/login", (req, res) => {
  res.render("pages/login");
});

router.get("/signup", (req, res) => {
  res.render("pages/signup");
});

/* =====================
   SIGNUP
===================== */
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.redirect("/login");
  } catch (error) {
    console.error(error);
    res.status(500).send("Signup failed");
  }
});

/* =====================
   LOGIN
===================== */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.send("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.send("Wrong password");
    }

    req.session.user = {
      name: user.name,
      email: user.email,
    };

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Login failed");
  }
});

/* =====================
   LOGOUT
===================== */
router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
});

module.exports = router;
