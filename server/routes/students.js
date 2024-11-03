const express = require('express');
const router = express.Router();
const Student = require('../models/student');

router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.json(student);
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
});

router.post('/', async (req, res) => {
    const student = new Student({
        Name: req.body.Name,
        Roll_no: req.body.Roll_no,
        Sub: req.body.Sub,
        Branch: req.body.Branch,
        Year: req.body.Year
    });

    try {
        const a1 = await student.save();
        res.json(a1);
    } catch (err) {
        res.status(400).send('Error: ' + err);
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        student.Sub = req.body.Sub;
        const a1 = await student.save();
        res.json(a1);
    } catch (err) {
        res.status(400).send('Error: ' + err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const student = await Student.deleteOne({ _id: req.params.id });
        res.json(student);
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
});

module.exports = router;
