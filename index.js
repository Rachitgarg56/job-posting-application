const express = require('express');
const mongoose = require('mongoose');
const jobRoutes = require('./routes/job');

const app = express();
const PORT = 8080;

// JSON Parsing middleware
app.use(express.json());

// MongoDB Connection
mongoose
// .connect('mongodb://localhost:27017/jobApp')
// .connect('mongodb://0.0.0.0:27017/jobApp')
.connect('mongodb+srv://admin-rachit:a4jKVhconS4k2nkW@jobapp.iojaaqn.mongodb.net/')
.then(() => console.log("Connection with database established successfully"))
.catch((err) => console.log('ERROR CONNECTING WITH DATABASE', err));

// API routes
app.use(jobRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})
