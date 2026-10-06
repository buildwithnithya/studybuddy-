const StudySession = require('../models/StudySession');

exports.createSession = async (req, res) => {
  try {
    const session = await StudySession.create({
      ...req.body,
      userId: req.userId
    });
    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSessions = async (req, res) => {
  try {
    const sessions = await StudySession.find({ userId: req.userId })
      .sort({ studiedAt: -1 });
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
