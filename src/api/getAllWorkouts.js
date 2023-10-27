const mongoose=require('mongoose');

const Workout=require('../dbConfig/WorkoutModel');

 const getAllWorkouts= async (req,res)=>{
    
    try {
        const workouts=await Workout.find({}).sort({createdAt: -1})
        res.status(200).json(workouts)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
module.exports=getAllWorkouts