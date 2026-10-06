const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const controller = require('../controllers/studyController');

router.use(auth);

router.post('/', controller.createPlan);
router.get('/', controller.getPlans);
router.get('/:id', controller.getPlan);
router.put('/:id', controller.updatePlan);
router.delete('/:id', controller.deletePlan);

module.exports = router;
