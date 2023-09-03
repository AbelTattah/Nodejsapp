const { text } = require('express');
const mongoose = require('mongoose')




const updatteSchema = mongoose.Schema(
    {

        Postt:{
            type:text,
            required:true
        },
        Commentt:{
            type:Array,
            required:true
        },
        SID:{
            type:Number,
            required:true,
            default:0
        },
        Name: {
            type:text,
            required:true
        },
     
        
    },
    {
        timestamps: true
    }
   
)



const Updatte = mongoose.model('updatte',updatteSchema);
module.exports =Updatte;