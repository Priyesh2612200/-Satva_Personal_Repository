import mongoose from "mongoose";

const UserSchema = new mongoose.Schema ({
    empname : {
        type:String,
        required:true
    },
    empemail:{
        type:String,
        required:true,
        unique:true
    },
    empcity:{
        type:String,
        required:true
    },
    deptid:{
        type:[mongoose.Schema.Types.ObjectId],
        required:true
    }

});

const UserDate = mongoose.model('employee',UserSchema)

export default UserDate;