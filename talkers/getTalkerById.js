const fs = require('fs').promises;

const getTalkerById = async (req, res) => {
  const { id } = req.params;
  const readFile = await fs.readFile('./talker.json', 'utf-8');
  const talkerFile = JSON.parse(readFile);
  const talkerFind = talkerFile.find((talkerId) => talkerId.id.toString() === id);

  if (!talkerFind) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  res.status(200).json(talkerFind);
};

module.exports = getTalkerById;