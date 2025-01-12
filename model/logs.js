const mongoose = require("mongoose");

const logsSchema = mongoose.Schema(
  {
    file: {
      type: String,
      required: [true, "Logs file name is required."],
    },
    date: {
      type: Date,
      required: [true, "Logs date is required."],
    },
    message: {
      type: String,
      required: [true, "Log message is required"],
    },
    type: {
      type: String,
      default: "verbose",
      enum: ["warn", "info", "error", "debug","verbose"],
    },
  },
  { timestamps: true }
);

const log = mongoose.model("Log", logsSchema);

module.exports = logsSchema;
