const fs = require('fs').promises;

const editTalker = async (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const talkerContent = await fs.readFile('./talker.json', 'utf-8');
  const fileTalker = JSON.parse(talkerContent);

  const findTalker = fileTalker.findIndex((idTalker) => idTalker.id.toString() === id);

  fileTalker[findTalker] = { ...fileTalker[findTalker], name, age, talk };

  await fs.writeFile('./talker.json', JSON.stringify(fileTalker));
  return res.status(200).json(fileTalker[findTalker]);
};

module.exports = editTalker;