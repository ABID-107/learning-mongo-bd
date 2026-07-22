const express = require('express');
const app = express();
const userModel = require('./userModel');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name: 'Abidji',
        username: 'abidji123',
        email: 'abidji@gmail.com'
    });
    res.json(createdUser);
});

app.get('/update', async (req, res) => {
    let updatedUser = await userModel.findOneAndUpdate(
        { username: 'abid123' },
        { name: 'Abid Khan' },
        { returnDocument: 'after' });
    res.json(updatedUser);
});

app.get('/read', async (req, res) => {
    let users = await userModel.find({username: 'abid123'});
    res.send(users);
});

app.get('/delete', async (req, res) => {
    let users = await userModel.findOneAndDelete({username: 'abid123'});
    res.send(users);
});

app.listen(3000)