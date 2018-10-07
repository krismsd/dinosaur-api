const winston = require('winston');

const Dinosaur = require('../../models/dinosaur');
const dinosaurFormatter = require('../../formatters/dinosaur');

module.exports = async (req, res) => {
  try {
    const dinosaurs = await Dinosaur.find().exec();
    const out = dinosaurs.map(dinosaurFormatter);

    res.send(out);
  } catch (e) {
    winston.error(e);
    res.status(500).send({ message: 'Problem getting data' });
  }
};
