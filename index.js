const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is working!');
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Fly.io backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
