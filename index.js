const express = require('express');
const bodyParser = require('body-parser');

const { validateEmail, validatePassword } = require('./middlewares/validateLogin');
const generateToken = require('./middlewares/generateToken');
const validateToken = require('./middlewares/validateToken');
const setNewTalker = require('./middlewares/validateTalker');

const getAllTalkers = require('./talkers/getAllTalkers');
const getTalkerById = require('./talkers/getTalkerById');
const createTalker = require('./talkers/createTalker');
const editTalker = require('./talkers/editTalker');
const deleteTalker = require('./talkers/deleteTalker');
const searchTalker = require('./talkers/searchTalker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker/search', validateToken, searchTalker);
app.get('/talker/:id', getTalkerById);
app.get('/talker', getAllTalkers);

app.post('/login', validateEmail, validatePassword, generateToken);
app.post('/talker', validateToken, setNewTalker, createTalker);

app.put('./talker/:id', setNewTalker, editTalker);

app.delete('./talker/:id', validateToken, deleteTalker);

app.listen(PORT, () => {
  console.log('Online');
});
