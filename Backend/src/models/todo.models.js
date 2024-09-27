import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
     title: {
        type: String,
        require: true
    },
     body: {
        type: String,
        require: true
    },
    user: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    ]

    
},{timestamps:true})
 const Todo = mongoose.model('Todo',todoSchema);

 export default Todo;