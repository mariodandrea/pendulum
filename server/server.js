/*
 * @name server.js
 * @description Main server file for hosting our backend
 */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('hello there');
});

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));
