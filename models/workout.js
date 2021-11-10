const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name:{
        type: String,
        trim: true,
        required: 'enter a workout name'
    },
    workoutType:{
        type: String,
        required: 'select a workout type'
    },
    sets:{
        type: Number,
        required: 'please enter a number of sets'
    },
    reps:{
        type: Number,
        require: 'please enter a number of reps'
    },
    duration:{
        type: Number,
        required: 'please enter a duration'
    },
    distance:{
        type: Number,
        trim: true,
        required: 'please enter a distance in miles'
    },
    weight:{
        type: Number,
        required: 'please enter a weight'
    },
});



const Workout = mongoose.model('Book', workoutSchema);
module.exports = Workout;