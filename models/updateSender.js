const { text } = require('express');
const mongoose = require('mongoose')




const updateSender = mongoose.Schema(
    {

        Update:{
            type:String,
            required:true
        },
        SID:{
            type:Number,
            required:true,
            default:0
        }, 

    },
    {
        timestamps: true
    }
   
)



const UpdateSender = mongoose.model('updatesend',updateSender);
module.exports =UpdateSender;