const express = require("express");
const { getMessage } = require("./utils");

const router = express.Router();

router.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

router.get("/message", (req, res) => {
  res.json({ message: getMessage() });
});

module.exports = router;
