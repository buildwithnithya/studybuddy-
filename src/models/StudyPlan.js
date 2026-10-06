const mongoose = require('mongoose');

const studyPlanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  subjects: [{ type: String }],
  deadline: { type: Date },
  goals: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('StudyPlan', studyPlanSchema);
