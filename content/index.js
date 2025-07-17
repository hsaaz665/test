const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Hello from ${{ values.name }}!',
    description: '${{ values.description }}'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`🚀 ${{ values.name }} running on port ${PORT}`);
});
