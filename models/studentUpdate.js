const mongoose = require('mongoose')




const studentUpdateSchema = mongoose.Schema(
    {
        Update:{
            type:Array,
            required: [true,'Please enter a product name']
        },
        Comment:{
            type:Array,
            required:false,
            default:0
        },
        
    },
   
)



const Studentupdate = mongoose.model('StudentUpdate',studentUpdateSchema);
module.exports =Studentupdate;