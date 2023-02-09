const express = require("express");
const router = express.Router();
const Exercise = require("./exercisemodel")

// 
router.route("/create").post((req, res) => {
  const name =req.body.name;
  const gifUrl =req.body.gifUrl;
  const bodypart = req.body.bodypart;
  const target = req.body.target;
  const newExercise = new Exercise({
    name,
    gifUrl,
    bodypart,
    target
  });

  newExercise.save();
})

router.route("/data").get((req, res) => { 
    Exercise.find()
    .then(foundExerscises => res.json(foundExerscises))
})
module.exports = router;