const router = require("express").Router();
let exercise = require("../models/exercise.model");
router.route("/").get((req, res) => {
  exercise
    .find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json("Error:" + err));
});
router.route("/add").post((req, res) => {
  const exercisename = req.body.exercisename;
  const newExercise = new exercisename({ exercisename });

  newExercise
    .save()
    .then(() => res.json("Exercise added"))
    .catch(err => res.status(400).json("Error" + err));
});
module.exports = router;
