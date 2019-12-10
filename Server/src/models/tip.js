const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const tipSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
});

tipSchema.plugin(mongoosePaginate);

const Tip = mongoose.model('Tip', tipSchema);

module.exports = Tip;
