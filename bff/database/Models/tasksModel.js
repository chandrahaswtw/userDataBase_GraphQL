const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tasksSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", tasksSchema, "TaskData");
