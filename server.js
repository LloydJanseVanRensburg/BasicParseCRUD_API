const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send('Api running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
