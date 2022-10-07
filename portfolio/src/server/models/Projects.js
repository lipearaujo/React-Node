const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  projectURL: {
    type: String,
    required: true,
  },
});

const Project = mongoose.model("ProjectData", ProjectSchema);
module.exports = Project;
