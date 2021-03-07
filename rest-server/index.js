const express = require('express');
const app = express();
const config = require('./config/config');
const cors = require('cors');
const routes = require('./routes');

app.use(cors());

app.use('/api', routes);


//-------------------------------------------------------------------------------------
app.listen(config.PORT, () => {
    console.log(`Server is listening on port ${config.PORT}...`);
});
