const mongoose = require('mongoose')


//Database schema
const productSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required: [true,'Please enter a product name']
        },
        space:{
            type:Number,
            required:true,
            default:0
        },
        price: {
            type:Number,
            required:false
        }
    },
    {
        timestamps: true
    }
)


//Models are used to save data in databases.
//Models consist of the schema
//Creating model that will be used to save data in mongo DB
const Product = mongoose.model('Product',productSchema);


module.exports = Product;
