const { model, Schema } = require('mongoose');

const studentSchema = new Schema({
  firstName: String,
  lastName: String,
  assignedDay: String, 
  currentBookMath: String,
  currentBookEnglish: String,
  presence: Boolean,
  todaysWorkCompleted: Boolean,
  startTimeHr: Number,
  startTimeMin: Number,
  endTimeHr: Number,
  endTimeMin: Number,
  absencesLast6Month: Number,
  subjects: [String],
  parentsPhoneNumber: String,
  notes: [String],
  makeupClassesTaken: [String]
});

module.exports = model('Student', studentSchema);