const winston = require('winston');

const Dinosaur = require('../../models/dinosaur');

module.exports = async (req, res) => {
  try {
    const { name } = req.params;

    await Dinosaur.deleteOne({ name });

    res.status(204).send();
  } catch (e) {
    winston.error(e);
    res.send(400, { message: 'Problem occured deleting data' });
  }
};
