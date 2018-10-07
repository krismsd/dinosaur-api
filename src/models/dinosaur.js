const mongoose = require('mongoose');

const dinosaurSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  era: {
    type: String,
    required: true,
    enum: ['triassic', 'jurassic', 'cretaceous'],
  },
  diet: {
    type: String,
    required: true,
    enum: ['herbivore', 'omnivore', 'carnivore'],
  },
});

module.exports = mongoose.model('Dinosaur', dinosaurSchema);
