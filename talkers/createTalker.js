const fs = require('fs').promises;

const createTalker = async (req, res) => {
  const { name, age, talk } = req.body;
  const talkerContent = await fs.readFile('./talker.json');
  const fileTalker = JSON.parse(talkerContent);
  const id = fileTalker[fileTalker.length - 1].id + 1;
  
  const newTalker = {
    id,
    name,
    age,
    talk,
  };

  fileTalker.push(newTalker);
  await fs.writeFile('./talker.json', JSON.stringify(fileTalker));
  return res.status(201).json(newTalker);
};

module.exports = createTalker;