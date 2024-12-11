import mongoose from "mongoose";

const connectMongoDB = async () => {
    try{
        mongoose.connect(`${process.env.MONGOBD_URI}`);
        console.log("connected to Mongo db.");
    }catch(error){
        console.log(error);
    }
}

export default connectMongoDB;