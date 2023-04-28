import mongoose, { mongo } from "mongoose";

const UserSchema = new mongoose.Schema ({
    name : {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    }

});

const UserDate = mongoose.model('UserData',UserSchema)

export default UserDate;