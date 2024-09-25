const express = require('express');
const fs = require('fs');
const Task = require('./taskModel');

const app = express();
app.use(express.json());

let tasks = [
    new Task(1, 'Task 1', ' MAKE FRONT END ', false),
    new Task(2, 'Task 2', ' MAKE BACK END ', true),
    new Task(3, 'Task 3', ' COMBINE FRONT END AND BACK END ', false)
];


function saveTasksToFile() {
    fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
}


function loadTasksFromFile() {
    if (fs.existsSync('tasks.json')) {
        const data = fs.readFileSync('tasks.json');
        tasks = JSON.parse(data);
    }
}


loadTasksFromFile();


app.get('/tasks', (req, res) => {
    res.json(tasks);
});


app.get('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});


app.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    if (!title && !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = new Task(id, title, description);
    tasks.push(newTask);
    saveTasksToFile();
    res.status(201).json(newTask);
});


app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, description, completed } = req.body;
    const task = tasks.find(t => t.id === id);

    if (task) {
        if (!title && !description && completed === undefined) {
            return res.status(400).json({ message: 'Title, description, and completed status are required' });
        }
        task.title = title;
        task.description = description;
        task.completed = completed;
        saveTasksToFile();
        res.json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});


app.patch('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { completed } = req.body;
    const task = tasks.find(t => t.id === id);

    if (task) {
        if (completed === undefined) {
            return res.status(400).json({ message: 'Completed status is required' });
        }
        task.completed = completed;
        saveTasksToFile();
        res.json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});


app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === id);

    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        saveTasksToFile();
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
