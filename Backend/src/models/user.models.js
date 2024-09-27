import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },

    password: {
        type: String,
        require: true
    },

     todo: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Todo'
        }
    ]

},{timestamps:true})

const User = mongoose.model('User', userSchema);
export default User;