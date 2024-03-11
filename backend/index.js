const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000; // Set your desired port

app.use(bodyParser.json());
app.use(cors());

// Define your routes and middleware here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
