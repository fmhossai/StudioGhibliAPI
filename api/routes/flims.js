const express = require("express");
const router = express.Router();
const data = require("../../data.json");

router.get("/", (req, res, next) => {
  res.status(200).json({
    flims: data.flims,
  });
});
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (!id || id === 0 ) {
    res.status(400).json({
      message: "Bad Request",
    });
  }
  if(id > data.flims.length){
      res.status(404).json({
          message: "ID not found"
      })
  }
  const foundFlim = data.flims.find((flim) => flim.id === id);
  res.status(200).json(foundFlim);
});

module.exports = router;
