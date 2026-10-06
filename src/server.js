require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'StudyBuddy API is running!' });
});

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/study-plans', require('./routes/studyRoutes'));
app.use('/api/study-sessions', require('./routes/sessionRoutes'));
app.use('/api/ai', require('./routes/aiRoutes'));

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`StudyBuddy API running on http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error('Database connection failed:', error.message);
  process.exit(1);
});
