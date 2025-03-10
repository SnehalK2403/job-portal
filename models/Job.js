const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    jobId: { type: Number, unique: true, required: true }, // Auto-increment ID
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    salary: { type: Number, required: true }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
