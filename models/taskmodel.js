const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User', 
    //     // required: true
    // },
    heading: {
        type: String, 
        required: true
    },
    description: {
        type: String
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    status: {
        type: String,
        // enum: ['Pending', 'In Progress', 'Completed'],
        default: 'Pending'
    },
    progress: {
        type: Number,
        default: 0
    },
    reminder: { 
        type: Date 
    },
    userId:{
        type:String
    }
    
});

const tasks = mongoose.model('tasks', taskSchema);
module.exports = tasks