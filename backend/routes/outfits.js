const express = require('express');
const Outfit = require('../models/Outfit');
const auth = require('../middleware/auth');
const router = express.Router();

// Get all outfits
router.get('/', async (req, res) => {
  try {
    const outfits = await Outfit.find().populate('createdBy', 'username');
    res.json(outfits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get user's outfits
router.get('/my-outfits', auth, async (req, res) => {
  try {
    const outfits = await Outfit.find({ createdBy: req.userId });
    res.json(outfits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create outfit
router.post('/', auth, async (req, res) => {
  try {
    const { name, description, items, occasion, season } = req.body;
    
    const outfit = await Outfit.create({
      name,
      description,
      items,
      occasion,
      season,
      createdBy: req.userId
    });
    
    res.status(201).json(outfit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update outfit
router.put('/:id', auth, async (req, res) => {
  try {
    const outfit = await Outfit.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.userId },
      req.body,
      { new: true }
    );
    
    if (!outfit) {
      return res.status(404).json({ message: 'Outfit not found' });
    }
    
    res.json(outfit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete outfit
router.delete('/:id', auth, async (req, res) => {
  try {
    const outfit = await Outfit.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.userId
    });
    
    if (!outfit) {
      return res.status(404).json({ message: 'Outfit not found' });
    }
    
    res.json({ message: 'Outfit deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;