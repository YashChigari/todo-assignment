const mongoose = require('mongoose');
const Tasks = mongoose.model('Task', {
    name: String,
    priority: Number,
    teamName: String
}, 'tasks', { overwriteModels: true});

const TaskMember = mongoose.model('TaskMember', {
    taskName: String,
    teamMemberName: String,
    teamName: String,
}, 'task_members', { overwriteModels: true});


module.exports = { Tasks, TaskMember };