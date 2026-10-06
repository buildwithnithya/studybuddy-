const mongoose = require('mongoose');

const studySessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  studyPlanId: { type: mongoose.Schema.Types.ObjectId, ref: 'StudyPlan' },
  subject: { type: String, required: true },
  duration: { type: Number, required: true },
  notes: { type: String },
  studiedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('StudySession', studySessionSchema);
