const aiService = require('../services/aiService');

exports.askAI = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ message: 'Question is required' });
    }

    const answer = await aiService.ask(question);
    res.json({ question, answer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.generateStudyPlan = async (req, res) => {
  try {
    const { subjects, days, hoursPerDay } = req.body;

    const prompt = `Create a study plan for these subjects: ${subjects.join(', ')}.
Study duration: ${days} days. Hours per day: ${hoursPerDay}.`;

    const answer = await aiService.ask(prompt);
    res.json({ answer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
