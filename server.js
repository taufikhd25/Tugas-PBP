const express = require('express');
const bodyParser = require('body-parser');
const mahasiswaController = require('./controllers/mahasiswacontroller');
const dosenController = require('./controllers/dosenController'); 

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/mahasiswa', mahasiswaController);
app.use('/dosen', dosenController);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});