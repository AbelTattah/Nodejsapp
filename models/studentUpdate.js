const mongoose = require('mongoose')




const studentUpdateSchema = mongoose.Schema(
    {
        Update:{
            type:String,
            required: [true,'Please enter a product name']
        },
        Comment:{
            type:String,
            required:false,
            default:0
        },
        
    },
   
)



const Studentupdate = mongoose.model('StudentUpdate',studentUpdateSchema);
module.exports =Studentupdate;