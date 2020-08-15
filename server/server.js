const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (request, response) => response.send('Server response'));

app.listen(port, () => console.log(`Server running on port ${port}`))