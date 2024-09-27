import express from 'express';
import connectDB from './db/index.js';
import auth from './routes/auth.js';
import cors from 'cors'
import todo from './routes/todo.js';
import dotenv from 'dotenv';
 
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors()) 

connectDB()
.then(()=>{

    app.use('/api/v1',auth);

    app.use('/api/v2',todo);

    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });

})
.catch((err) => {
    console.log("mongo db connection failed",err)
})





//  ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     } catch (error) {
//         console.log('ERROR :', error) 
//     }
//  })()  