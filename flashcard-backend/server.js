const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://localhost:3000' // Allow requests from this origin
}));

// Example API endpoint
app.get('/api/flashcards', (req, res) => {
  // Initially, no data to return
  res.json([]);
});

app.listen(5001, () => {
  console.log('Server listening on port 5001');
});
