const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose=require('mongoose');
const Workout=require('./dbConfig/WorkoutModel');
require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());





 const getAllWorkouts= async (req,res)=>{
    
    try {
        const workouts=await Workout.find({}).sort({createdAt: -1})
        res.status(200).json(workouts)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
// module.exports=getAllWorkouts
app.get("/",getAllWorkouts)

app.use('/api/workouts', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
