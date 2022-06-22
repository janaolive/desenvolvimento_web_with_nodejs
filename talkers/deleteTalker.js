const fs = require('fs').promises;

const deleteTalker = async (req, res) => {
  const { id } = req.params;
  const talkerContent = await fs.readFile('./talker.json', 'utf-8');
  const fileTalker = JSON.parse(talkerContent);

  const findTalker = fileTalker.findIndex((idTalker) => idTalker.id.toString() === id);

  fileTalker.splice(findTalker, 1);
 
  await fs.writeFile('./talker.json', JSON.stringify(fileTalker));
  return res.status(204).end();
};

module.exports = deleteTalker;