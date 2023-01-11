const express = require('express');
const { parse } = require('path');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello there');
});
const courses = [
    {id: 1, name: 'Math'},
    {id: 2, name: 'English'},
    {id: 3, name: 'Gym'}
];
//http GET requests route
app.get('/api/courses', (req, res) => {
    res.send(courses);
});
//requrest course by id
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send("The course with the given ID wasn't found");
    }
    res.send(course);
})
app.listen(3000, () => {
    console.log('Listening on port 3000...');
})