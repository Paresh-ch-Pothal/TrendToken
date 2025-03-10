const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    tag:{
        type: [String],
        required: true,
    },
    imgLink:{
        type: String,
        required: true,
    },
    buyLink:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
})

const Product=mongoose.model("product",productSchema)
module.exports=Product