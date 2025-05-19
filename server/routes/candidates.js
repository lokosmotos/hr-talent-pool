const express = require('express');
const router = express.Router();

// Temporary in-memory storage
let candidates = [
  { id: 1, name: "John Doe", branch: "JB", status: "Applied" }
];

// GET all candidates
router.get('/', (req, res) => {
  res.json(candidates);
});

// POST new candidate
router.post('/', (req, res) => {
  const newCandidate = req.body;
  candidates.push(newCandidate);
  res.status(201).json(newCandidate);
});

module.exports = router;