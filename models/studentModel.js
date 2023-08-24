const mongoose = require('mongoose')




const studentSchema = mongoose.Schema(
    {
        SID:{
            type:Number,
            required: [true,'Please enter a product name']
        },
        SUBID:{
            type:Number,
            required:true,
            default:0
        },
        
    },
   
)



const Student = mongoose.model('Student',studentSchema);
module.exports =Student;