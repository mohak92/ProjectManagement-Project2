const mongoose = require('mongoose')
const { Schema } = mongoose

const GroupSchema = new Schema({
  name: {
    type: String,
    default: 'Awesone Group'
  },
  imageUrl: {
    type: String
  },
  users: {
    type: Array,
  },
  tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'Task'
  }],
  timeStamp: {
      type: Date
  }
});

const Group = mongoose.model('groups', GroupSchema);

module.exports = Group;
