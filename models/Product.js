const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,'Insert products name']
    },

    description:{
        type:String,
        required: [true, 'Inerst Description']
    },

    price:{
        type:Number,
        required: [true, 'Insert price']
    },

    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Product', ProductSchema)