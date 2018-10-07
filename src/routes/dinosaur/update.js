const winston = require('winston');

const Dinosaur = require('../../models/dinosaur');

function copyKeyIfPresent(key, from, to) {
  if (from[key]) {
    to[key] = from[key];
  }
}

module.exports = async (req, res) => {
  try {
    const { name } = req.params;

    const dinosaur = await Dinosaur.findOne({ name });
    if (!dinosaur) {
      res.status(404).send({ message: 'Resource not found' });
      return;
    }

    // Update our dinosaur entity
    [
      'era',
      'diet',
    ].forEach(key => copyKeyIfPresent(key, req.body, dinosaur));

    await dinosaur.save();

    res.status(204).send();
  } catch (e) {
    winston.error(e);
    res.status(400).send({ message: 'Problem occured updating data' });
  }
};
