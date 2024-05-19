
const JobModel = require('../models/job');

const createJob = async (req,res) => {
    const jobObj = req.body;
    const newJob = new JobModel(jobObj);//document
    const newlySavedJob = await newJob.save();//saving document in collection
    console.log(newlySavedJob);

    res.json({
        success: true,
        message: 'Job created successfully',
        jobId: newlySavedJob._id,
    })
}

const listJob = async (req,res) => {
    // const minSalary = req.query.minSalary;
    // const maxSalary = req.query.maxSalary;
    const { minSalary, maxSalary } = req.query;
    const jobsList = await JobModel.find({
        $and: [ { salary: { $gte: minSalary }}, { salary: { $lte: maxSalary } } ], 
    });
    res.json({
        success: true,
        message: 'List job api',
        results: jobsList,
    })
}

const editJob = async (req,res) => {
    const jobId = req.params.id;
    
    // Model.findByIdAndUpdate(_ID TO FIND THE RECORD, FIELDS WITH DATA TO UPDATE)
    await JobModel.findByIdAndUpdate(jobId, req.body); 

    // const findObj = { title: 'Updated Software Engineer' };
    // const updateObj = { location: 'NY' };
    // await JobModel.findOneAndUpdate(findObj, updateObj); // updates first matching record
    // await JobModel.updateMany(findObj, updateObj); // updates all the matching records

    res.json({
        success: true,
        message: 'Job edited successfully!'
    })
}

const deleteJob = async (req,res) => {
    const jobId = req.params.id;
    await JobModel.findByIdAndDelete(jobId);
    // JobModel.findOneAndDelete();
    // JobModel.deleteMany();
    res.json({
        success: true,
        message: 'Dummy delete job api'
    })
}

const jobController = {
    createJob,
    listJob,
    editJob,
    deleteJob
}

module.exports = jobController;
