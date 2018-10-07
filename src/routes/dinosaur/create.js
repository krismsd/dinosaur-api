const winston = require('winston');

const Dinosaur = require('../../models/dinosaur');

module.exports = async (req, res) => {
  try {
    const dinosaur = new Dinosaur({
      name: req.body.name,
      era: req.body.era,
      diet: req.body.diet,
    });

    await dinosaur.save();

    res.status(204).send();
  } catch (e) {
    winston.error(e);
    res.send(400, { message: 'Problem occured saving data' });
  }
};
