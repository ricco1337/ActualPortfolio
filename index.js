const express = require('express');
const path = require('path');


const app = express()

app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
});
let port = 8080
app.listen(port,() => console.log(`lisening on port ${port}`)
