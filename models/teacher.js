const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    nip: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    course: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
});
  
module.exports = mongoose.model('Teacher', teacherSchema);