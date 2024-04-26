// models/UserActivity.js
const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  event: {
    type: String,
    required: true,
  },
  pageGroup: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  referer: {
    type: String,
    required: false,
  },
  query: {
    type: Object,
    required: false,
  },
  params: {
    type: Object,
    required: false,
  },
  btn: {
    type: String,
    required: false,
  },
  user: {
    type: Object,
    required: false,
  },
});

const LogPayLoad = mongoose.model("Log", logSchema);

module.exports = LogPayLoad;
