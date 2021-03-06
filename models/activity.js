import mongoose from 'mongoose'

export {
  Activity
}

//might have a date and a time

const activitySchema = new mongoose.Schema({
  name: String,
  type: String,
  participants: {type: Number, min: 1, max: 5, default:1},
  peopleInActivity: [{type: mongoose.Schema.Types.ObjectId, ref: "Profile"}],
  activities: [{type: mongoose.Schema.Types.ObjectId, ref: "Profile"}],
  activityNo: String, //each activity has a key from the api
  scheduledTime: Date,
  scheduledDate: Date
}, {
  timestamps: true
});

const Activity = mongoose.model('Activity', activitySchema);