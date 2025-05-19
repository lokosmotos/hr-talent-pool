require('dotenv').config();
const express = require('express');
const cors = require('cors');
const candidatesRouter = require('./routes/candidates');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/candidates', candidatesRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});