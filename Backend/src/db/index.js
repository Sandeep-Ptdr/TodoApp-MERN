import mongoose from 'mongoose'
 import dotenv from 'dotenv'
dotenv.config();


const connectDB = async () => {
    try {
      const connectionInstance =  await mongoose.connect(process.env.MONGODB_URI);
      // console.log(process.env.MONGODB_URI,'URI')
      console.log(`MongoDB connected !! DB host ${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.log("Connection Error!" , error);
        process.exit(1);
    }

}

export default connectDB;   