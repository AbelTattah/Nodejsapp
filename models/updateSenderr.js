const { text } = require('express');
const mongoose = require('mongoose')




const updateSenderr = mongoose.Schema(

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



const UpdateSenderr = mongoose.model('updatesend',updateSenderr);
module.exports =UpdateSenderr;