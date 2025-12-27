require("dotenv").config();

const express = require("express");
const path = require("path");
const session = require("express-session");

const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/auth.routes");
const pageRoutes = require("./routes/page.routes");

const app = express();

/* =====================
   DATABASE
===================== */
connectDB();

/* =====================
   MIDDLEWARES
===================== */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // prod me true
  })
);

/* =====================
   VIEW ENGINE & STATIC
===================== */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../frontend/views"));
app.use(express.static(path.join(__dirname, "../frontend/public")));

/* =====================
   ROUTES
===================== */
app.use("/", pageRoutes);
app.use("/", authRoutes);

/* =====================
   SERVER
===================== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
