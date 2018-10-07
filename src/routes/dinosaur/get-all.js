const winston = require('winston');

const Dinosaur = require('../../models/dinosaur');
const dinosaurFormatter = require('../../formatters/dinosaur');

module.exports = async (req, res) => {
  try {
    const query = {};
    if (req.query.era) {
      query.era = req.query.era;
    }
    if (req.query.diet) {
      query.diet = req.query.diet;
    }

    const dinosaurs = await Dinosaur.find(query).exec();
    const out = dinosaurs.map(dinosaurFormatter);

    res.send(out);
  } catch (e) {
    winston.error(e);
    res.status(500).send({ message: 'Problem getting data' });
  }
};
