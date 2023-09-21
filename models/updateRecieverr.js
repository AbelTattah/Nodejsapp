const { text } = require('express');
const mongoose = require('mongoose')




const updateRecieverr = mongoose.Schema(
    {

        Update:{
            type:Array,
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



const UpdateRecieverr = mongoose.model('updatesend',updateRecieverr);
module.exports =UpdateRecieverr;