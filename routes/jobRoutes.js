const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// ✅ Create a new job
router.post("/", async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.status(201).json(job);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// ✅ Get all jobs
router.get("/", async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Get a job by jobId
router.get("/:jobId", async (req, res) => {
    try {
        const jobId = parseInt(req.params.jobId);
        const job = await Job.findOne({ jobId: jobId });

        if (!job) return res.status(404).json({ message: "Job not found" });
        res.json(job);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// ✅ Update a job by jobId
router.put("/:jobId", async (req, res) => {
    try {
        const jobId = parseInt(req.params.jobId);
        const job = await Job.findOneAndUpdate({ jobId: jobId }, req.body, { new: true });

        if (!job) return res.status(404).json({ message: "Job not found" });
        res.json(job);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Delete a job by jobId
router.delete("/:jobId", async (req, res) => {
    try {
        const jobId = parseInt(req.params.jobId);
        const job = await Job.findOneAndDelete({ jobId: jobId });

        if (!job) return res.status(404).json({ message: "Job not found" });
        res.json({ message: "Job deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
