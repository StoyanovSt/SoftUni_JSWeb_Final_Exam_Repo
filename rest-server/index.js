const express = require('express');
const app = express();
const config = require('./config/config');
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(config.PORT, () => {
    console.log(`Server is listening on port ${config.PORT}...`);
});
