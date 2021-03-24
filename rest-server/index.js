const express = require('express');
const app = express();
const config = require('./config/config');
const cors = require('cors');
const routes = require('./routes');
const mongooseConfig = require('./config/mongooseConfig');
const isAuth = require('./middlewares/isAuth.js');

app.use(cors());

mongooseConfig();

app.use(express.json());

app.use(isAuth);

app.use('/api', routes);


//-------------------------------------------------------------------------------------
app.listen(config.PORT, () => {
    console.log(`Server is listening on port ${config.PORT}...`);
});
