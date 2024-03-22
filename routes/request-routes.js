const router = require('express').Router();
const consultationRequests = require('../controllers/request-controller');
router.get("/", consultationRequests.getRequests);
router.delete("/:id", consultationRequests.deleteRequests);
router.post("/", consultationRequests.addRequests);
module.exports = router;