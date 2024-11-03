const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRouter = require('./routes/students');

const url = 'mongodb://localhost:27018,localhost:27019,localhost:27020/cbitit3?replicaSet=m101';
const app = express();
mongoose.connect(url);
const con = mongoose.connection;

con.on('open', () => {
    console.log('Connected to MongoDB...');
});

app.use(cors());
app.use(express.json());
app.use('/students', studentRouter);
app.listen(9000, () => {
    console.log('Server started on port 9000');
});
