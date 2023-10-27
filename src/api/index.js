const express = require('express');

const emojis = require('./emojis');

const getAllWorkouts = require('./getAllWorkouts');

const getOneWorkout = require('./getOneWorkout');

const createWorkout = require('./createWorkout');

const deleteWorkout = require('./deleteWorkout');

const updateWorkout = require('./updateWorkout');

const router = express.Router();


// router.get('/', (req, res) => {
//   res.json({
//     message: 'API - 👋🌎🌍🌏',
//   });
// });

router.use('/emojis', emojis);
router.get('/', getAllWorkouts);
router.get('/:id', getOneWorkout);
router.post('/', createWorkout);
router.delete('/:id', deleteWorkout);
router.patch('/:id', updateWorkout);
module.exports = router;
