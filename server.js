const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || '4001';

app.get('/config', (req, res) => {
    res.status(200).send({env: process.env.NODE_ENV || 'develop'})
})

app.use(express.static(__dirname + '/dist'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port, () => {
    console.log(`server running on ${port}`)
});