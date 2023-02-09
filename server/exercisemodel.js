const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: { type: String, required: true },
  gifUrl: { type: String, required: true },
  bodypart: { type: String, required: true },
  target:{ type: String, required: true },
});

const Exercise = mongoose.model("Exercise", ExerciseSchema)

// Export model
module.exports = Exercise;