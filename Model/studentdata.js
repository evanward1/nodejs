const mongoose =require('mongoose');
const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    roll: {
        type: String,
        required: true,
    },
    registration: {
        type: String,
        required: true,
    },
    subjects: {
        type: [String],
        required: true,
    },
    registered_on: {
        type: Date,
        default: new Date(),
    },
})
var studentdata=mongoose.model('student',studentSchema);
module.exports= studentdata;