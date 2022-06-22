const validateName = async (req, res, next) => {
  const { name } = req.body;
    
  if ((!name) || (name === '')) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }
  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }

  next();
};

  const validateAge = async (req, res, next) => {
    const { age } = req.body;
    
  if ((!age) || (age === '')) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }
  if (age < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  
  next();
};

const validateTalk = (req, res, next) => {
  const { talk } = req.body;

  if (!talk || talk === '') {
    return res.status(400).json({ message:
      'O campo "talk" é obrigatório' });
  }

  next();
};

const validateWatchedAt = (req, res, next) => {
  const { talk } = req.body;
  const { watchedAt } = talk;
  const dateRegex = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
 
  if (!watchedAt || watchedAt === '') {
    return res.status(400).json({ message:
      'O campo "talk" é obrigatório' });
  }
  
  if (dateRegex.test(watchedAt) === false) {
    return res.status(400).json({ message:
      'O campo "watchedAt" é obrigatório' });
  }
  
  next();
};

const validateRate = async (req, res, next) => {
  const { talk } = req.body;
  const { rate } = talk;

  if (rate < 1 || rate > 5) {
    return res.status(400).json({ message:
      'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  
  if (!rate || rate === '') {
    return res.status(400).json({ message:
      'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
  }
  
  next();
};

module.exports = {
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
};