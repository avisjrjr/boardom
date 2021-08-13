import mongoose from 'mongoose'

export {
  Group
}

const groupSchema = new mongoose.Schema({
  name: String,
  decription: String,
  members: [{type: mongoose.Schema.Types.ObjectId, ref: "Profile"}],
  activities: [{type: mongoose.Schema.Types.ObjectId, ref: "Activity"}],
  calendar: {type: mongoose.Schema.Types.ObjectId, ref: "Calendar"}
}, {
  timestamps: true
});

const Group = mongoose.model('Group', groupSchema);