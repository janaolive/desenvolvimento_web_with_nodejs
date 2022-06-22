const fs = require('fs').promises;

const searchTalker = async (req, res) => {
  const { q } = req.query;
  const talkerContent = await fs.readFile('./talker.json', 'utf-8');
  const talkerFile = JSON.parse(talkerContent);
  
  const talkFiltered = talkerFile.filter((talker) => talker.name.includes(q));
  return res.status(200).json(talkFiltered);
};
// não é necessário inscluir os if's para termos não encontrado, 
// pois por padrão o filter já responde um array vazio
module.exports = searchTalker;