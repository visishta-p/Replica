const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Roll_no: { type: Number, required: true },
    Sub: { type: Boolean, required: true, default: false },
    Branch: { type: Number, required: true },
    Year: { type: Number, required: true }
});

module.exports = mongoose.model('Student', studentSchema);
