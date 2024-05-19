// model tells the structure of data

// cluster > server > db > collection

const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: false,
        default: 0, // to prevent inconsistency of data 
    }
})

// collection name - job
// the structure of 'job' collection is jobSchema  
const JobModel = mongoose.model('job', jobSchema);

module.exports = JobModel;
