const mongoose = require('mongoose')




const timetableSchema = mongoose.Schema(
    {
        Subject:{
            type:Object,
            required: [true,'Please enter a subject name']
        },   
    },
   
)



const timetable = mongoose.model('timetable',timetableSchema);
module.exports =timetable;