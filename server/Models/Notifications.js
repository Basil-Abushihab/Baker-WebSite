const {Schema,model}=require("mongoose");

const notificationSchema=new Schema({
    notificationMessage:String,
    notificationDate:Date,
})