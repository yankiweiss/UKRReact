const express = require("express");
const router = express.Router();
const path = require("path");

// API health check endpoint
router.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

module.exports = router;
