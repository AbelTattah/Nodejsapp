const { text } = require('express');
const mongoose = require('mongoose')




const updateReciever = mongoose.Schema(
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



const UpdateReciever = mongoose.model('updatesend',updateReciever);
module.exports =UpdateReciever;