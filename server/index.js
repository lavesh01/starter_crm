const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
const blogRoute = require('./routes/blog');
const app = express();

app.use(express.json());
app.use(cors({ credentials:true, origin: process.env.ORIGIN_URL}));
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/blog', blogRoute);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port 3000!");
})