const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { Tasks, TaskMember } = require('./mongoSchema');
const { json } = require('express/lib/response');

const app = express();

const mongodbURI = 'mongodb+srv://yashwanth:Yash1mongo@mymongo.pazsy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(mongodbURI, (err) =>
 err ? console.log('Error connecting to mongodb', err) : console.log('Connection success to DB'));

const PORT = 3000;

// Origin access
app.use(cors());
app.use(express.json());

app.get('/get-list',async (req,res) => {
    const allTasks = await Tasks.find();
    res.send({ message : 'Fetched todo list', data : allTasks})
})

app.post('/save-task', async (req,res) => {
    const { name, priority, teamName } = req.body;
    const todo = await Tasks.create({ name, priority, teamName});
    res.send({ message : 'Saved task successfully', data:todo })
})

app.delete('/delete-task/:id', async (req,res) => {
    const todo = await Tasks.deleteOne({ _id : req.params.id });
    res.send({ message : 'Task deleted successfully', data:todo })
})

app.listen(PORT, () => console.log('Listening to PORT', PORT))