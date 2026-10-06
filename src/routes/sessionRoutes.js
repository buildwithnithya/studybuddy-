const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const controller = require('../controllers/sessionController');

router.use(auth);

router.post('/', controller.createSession);
router.get('/', controller.getSessions);

module.exports = router;
