const express = require('express');
const bodyParser = require('body-parser');

const getAllTalkers = require('./talkers/getAllTalkers');
const getTalkerById = require('./talkers/getTalkerById');

const { validateEmail, validatePassword } = require('./middlewares/validateLogin');
const generateToken = require('./middlewares/generateToken');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker/:id', getTalkerById);
app.get('/talker', getAllTalkers);

app.post('/login', validateEmail, validatePassword, generateToken);

app.listen(PORT, () => {
  console.log('Online');
});
