const mongoose=require("mongoose");

const productschema=new mongoose.Schema({
    productname:{
        type:String,
        required:true,
        trim:true,
    },
    productdescription:{
        type:String,
        required:true,
        trim:true,
    },
    price:{
        type:Number,
        required:true,
    },
    images:{
        type:[String],
        required:true,
    },
    status:{
        type:String,
        enum:["Sold","Purchased","Forsale"],
    },
    
    quantity:{
        type:Number,
        default:1,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    createdat:{
        type:Date,
        default:Date.now,
     },
    ratingandreviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Ratingandreviews",
    }],

})


module.exports=mongoose.model("Product",productschema);