const mongoose = require('mongoose')




const buddySchema = mongoose.Schema(
    {

        SID:{
            type:Number,
            required:true
        },
        SName:{
            type:String,
            required:true
        },
        Spass:{
            type:String,
            required:true,
            default:0
        },
        Courses: {
            type:Array,
            required:true
        },
     
        
    },
    {
        timestamps: true
    }
   
)



const Buddy = mongoose.model('Buddy',buddySchema);
module.exports =Buddy;