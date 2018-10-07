const winston = require('winston');

const Dinosaur = require('../../models/dinosaur');
const dinosaurFormatter = require('../../formatters/dinosaur.js');

module.exports = async (req, res) => {
  try {
    const { name } = req.params;

    const dinosaur = await Dinosaur.findOne({ name });
    const out = dinosaurFormatter(dinosaur);
    res.send(out);
  } catch (e) {
    winston.error(e);
    res.status(500).send({ message: 'Problem getting data' });
  }
};
