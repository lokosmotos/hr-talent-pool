const router = express.Router();
const pool = require('../models/db');

// GET all candidates
router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM candidates');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new candidate
router.post('/', async (req, res) => {
  const { name, branch, status } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO candidates (name, branch, status) VALUES ($1, $2, $3) RETURNING *',
      [name, branch, status]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});