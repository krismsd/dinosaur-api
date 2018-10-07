const mongoose = require('mongoose');

const dinosaurSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  era: {
    type: String,
    required: true,
    enum: ['triassic', 'jurassic', 'cretaceous'],
    index: true,
  },
  diet: {
    type: String,
    required: true,
    enum: ['herbivore', 'omnivore', 'carnivore'],
    index: true,
  },
});

module.exports = mongoose.model('Dinosaur', dinosaurSchema);
