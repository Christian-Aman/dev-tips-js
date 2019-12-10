const mongoose = require('mongoose');
const Tip = require('./tip');
const Tag = require('./tag');

const connectDb = () => {
  mongoose.set('useUnifiedTopology', true);
  mongoose.set('useFindAndModify', false);
  return mongoose.connect('mongodb://localhost:27017/dev-tips-js', {
    useNewUrlParser: true,
  });
};

const models = { Tip, Tag };

module.exports = {
  models,
  connectDb,
};
