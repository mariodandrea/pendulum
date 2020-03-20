const express = require('express');
const path = require("path");
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    return res.render(path.resolve(__dirname, "physics.js"));
})

// app.get('/phyiscs.js', (req, res) => {
//     return res.sendFile(path.resolve(__dirname, "physics.js"));
// })


app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));
