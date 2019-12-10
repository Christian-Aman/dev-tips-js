const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  titleLowerCase: {
    type: String,
    required: true,
    lowercase: true,
  },
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;
