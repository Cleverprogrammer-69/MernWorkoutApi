const mongoose=require('mongoose');

const Workout=require('../dbConfig/WorkoutModel');

const deleteWorkout = async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({error: "No such workout"})
    try {
        const workout=await Workout.findOneAndDelete({_id: id})
    if(!workout){
        return  res.status(404).json({error: "No such workout"})
    }
    return res.status(200).json(workout)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
    
}

module.exports=deleteWorkout