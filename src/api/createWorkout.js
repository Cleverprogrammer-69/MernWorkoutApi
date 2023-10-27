const mongoose=require('mongoose');

const Workout=require('../dbConfig/WorkoutModel');

 const createWorkout= async (req,res)=>{
    const {title,reps,load}=req.body
    try {
        const workout=await Workout.create({title,reps,load})
        res.status(200).json(workout)
    } catch (error) {
       res.status(400).json({error: error.message})
    }
}

module.exports = createWorkout;
