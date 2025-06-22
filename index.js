// index.js
const express = require('express');
const path    = require('path');
const app     = express();

// serve all files in this directory
app.use(express.static(path.join(__dirname)));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Running at http://localhost:${port}`);
});
