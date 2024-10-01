import User from "../models/user.models.js";
import Todo from "../models/todo.models.js";
import { Router } from "express";

const router = Router();

router.post("/addtask", async (req, res) => {
    try {
        const { title, body, id } = req.body;

        const existingUser = await User.findById(id);

        if (!existingUser) {
            return res.status(200).json({ message: "User not found !" });
        }

        const todo = new Todo({ title, body, user: existingUser });

        await todo.save();

        existingUser.todo.push(todo);

        await existingUser.save();

        return res.status(200).json({ todo });

    } catch (error) {
        console.log("Error to add task", error);
        return res.status(500).json({ message: "Server error while adding task" });
    }
});

//update

router.put("/updatetask/:id", async (req, res) => {
    try {
        const { title, body,id } = req.body;
        
        const upTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            { title, body },
            { new: true }
        );

        if (!upTodo) {
            return res.status(404).json({ message: "task not found !" });
        }

        res.status(200).json({ upTodo });
    } catch (error) {
        console.log("Error while updating", error);
        return res
            .status(500)
            .json({ message: "Server error while updating task" });
    }
});

//Delete

router.delete("/deletetask/:id", async (req, res) => {
    try {
         const {id} = req.body;
         
        const existingUser = await User.findByIdAndUpdate(
            id,
            { $pull: { todo: req.params.id } }
        ); //$pull is a opeartor function for mongodb that pull out the data from array collection.

        if (!existingUser) {
            return res.status(404).json({ message: "User not found !" });
        }

        await Todo.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: "Todo Deleted !!!" });
    } catch (error) {
        console.log("Error while  deleting", error);
        return res
            .status(500)
            .json({ message: "Server error while  deleting task" });
    }
});

//read data
router.get("/readtask/:id", async (req, res) => {
    try {
        const existingUser = await Todo.find({ user: req.params.id });

        if (!existingUser) {
            res.status(200).json({ message: "User Id not found!" });
        }

        const alltodo = await Todo.find({ user: req.params.id }).sort({
            createdAt: -1,
        });

        if(alltodo.length !== 0){
            return  res.status(200).json({ alltodo });
        }
        else{
            res.status(200).json({message:"No task found!"})
        }

       
    } catch (error) {
        console.log("error in reading data", error);

    }
});

export default router;
