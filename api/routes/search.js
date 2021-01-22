const express = require("express");
const router = express.Router();
const data = require("../../data.json");

router.get("/", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.status(400).json({
      error: "Must contain 'q' query parameter",
    });
  }
  const query = q.toLowerCase();
  const foundFlims = data.flims.filter(({ title }) =>
    title.toLowerCase().includes(query)
  );
  res.send(foundFlims);
});

module.exports = router;
