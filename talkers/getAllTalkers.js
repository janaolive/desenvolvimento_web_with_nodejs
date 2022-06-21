const fs = require('fs').promises;

const getAllTalkers = async (req, res) => {
  const readFile = await fs.readFile('./talker.json', 'utf-8');
  const talkerFile = JSON.parse(readFile);
  if (!readFile) return res.status(200).json([]);
  
  return res.status(200).json(talkerFile);
};

module.exports = getAllTalkers;