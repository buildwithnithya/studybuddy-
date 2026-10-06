const StudyPlan = require('../models/StudyPlan');

exports.createPlan = async (req, res) => {
  try {
    const plan = await StudyPlan.create({
      ...req.body,
      userId: req.userId
    });
    res.status(201).json(plan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPlans = async (req, res) => {
  try {
    const plans = await StudyPlan.find({ userId: req.userId });
    res.json(plans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPlan = async (req, res) => {
  try {
    const plan = await StudyPlan.findOne({
      _id: req.params.id,
      userId: req.userId
    });

    if (!plan) return res.status(404).json({ message: 'Study plan not found' });
    res.json(plan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePlan = async (req, res) => {
  try {
    const plan = await StudyPlan.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      { new: true }
    );

    if (!plan) return res.status(404).json({ message: 'Study plan not found' });
    res.json(plan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePlan = async (req, res) => {
  try {
    const plan = await StudyPlan.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId
    });

    if (!plan) return res.status(404).json({ message: 'Study plan not found' });
    res.json({ message: 'Study plan deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
