import mongoose from "mongoose";
const connectDb = async() =>{
    const uri = process.env.MONGODB_URI
    try{
        const connection = await mongoose.connect(uri)
        if(connection){
            console.log("Connected to Database");
        }
        else{
            console.log("Failed to connect to Database");
        }
    }catch(e){
        console.log("Error connecting to Database");
    }
}
export default connectDb;