const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const controller = require('../controllers/aiController');

router.use(auth);

router.post('/ask', controller.askAI);
router.post('/study-plan', controller.generateStudyPlan);

module.exports = router;
