const mongoose = require('mongoose');

const outfitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  items: [{
    type: {
      type: String,
      enum: ['top', 'bottom', 'shoes', 'accessory'],
      required: true
    },
    description: String,
    color: String,
    image: String
  }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  occasion: {
    type: String,
    enum: ['casual', 'formal', 'business', 'party', 'sport'],
    default: 'casual'
  },
  season: {
    type: String,
    enum: ['spring', 'summer', 'fall', 'winter', 'all'],
    default: 'all'
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Outfit', outfitSchema);