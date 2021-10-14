
// CRUD APPLICATION API REQUEST AND TEST WITH POSTMAN NODE AND EXPRESS


// const  http = require('http');
const express = require('express');
const port = 5000;
const server = express();
server.use(express.json());

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World, from NodeJS');
// });

// REQUEST HANDLER/ MIDDLEWARE
server.get('/hobbits', (req, res) => {
 res.send('Welcome to Hobbiton');
 // Read DATA HERE ^^
 });      

 server.post('/hobbits', (req, res) => {
     res.status(201).json({ url: '/hobbits', operation: 'POST' });
     // CREATE DATA HERe ^
 });  

 server.put('/hobbits', (req, res) => {
     res.status(200).json({ url: '/hobbits', operation: 'PUT'});
     // UPDATE DATA HERE ^
 });     


 server.delete('/hobbits', (req, res) => {
    res.sendStatus(204);
    // DESTROYING/DELETING DATA HERE ^^
});

server.listen(port,  () => {
    console.log(`server listening on port ${port}`);
});
