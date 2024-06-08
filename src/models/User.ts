import mongoose, { Document ,Schema } from "mongoose"

export interface messageSchema extends Document{
    content:string,
    createdAt:Date
}

const MessageSchema:Schema<messageSchema> = new Schema({
    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    }
})








export interface userSchema extends Document{
    username:string;
    email:string;
    password:string;
    verifyCode:string;
    verifyCodeExpire:Date;
    isAcceptingMessage:boolean;
    message:messageSchema[]
}


const UserSchema:Schema<userSchema> = new Schema({
    username:{
      type:String,
      required:[true,'username required'],
      trim:true,
      unique:true
    },
    email:{
        type:String,
        required:[true,'email required'],
        unique:true,
        match:[/.+\@.+\..+/,'use a valid email']
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    verifyCode:{
        type:String,
        required:[true,"verifycode is required"]

    },
    verifyCodeExpire:{
        type:Date,
        required:[true,"verifycode is required"]
    },
    isAcceptingMessage:{
        type:Boolean,
        default:true
    },
    message:{
        type:[MessageSchema]
    }
})


 const UserModel = mongoose.models.User as mongoose.Model<userSchema> || mongoose.model<userSchema>('User',UserSchema)  

 export default UserModel