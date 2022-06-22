const express = require('express');
const bodyParser = require('body-parser');

const getAllTalkers = require('./talkers/getAllTalkers');
const getTalkerById = require('./talkers/getTalkerById');
const createTalker = require('./talkers/createTalker');
const editTalker = require('./talkers/editTalker');

const { validateEmail, validatePassword } = require('./middlewares/validateLogin');
const generateToken = require('./middlewares/generateToken');
const { validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  validateToken } = require('./middlewares/validateTalker');

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
app.post('/talker', validateToken, validateName, validateAge, validateTalk, validateWatchedAt,
           validateRate, createTalker);

app.put('./talker/:id', validateToken, validateName, validateAge, validateTalk, validateWatchedAt,
            validateRate, editTalker);

app.listen(PORT, () => {
  console.log('Online');
});
