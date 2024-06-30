const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require("cors")

const todoRoutes = require('./routes/ToDoRoute');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json())
app.use(cors())


mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB...');


  app.use('/', todoRoutes);

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});
