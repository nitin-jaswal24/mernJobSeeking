import mongoose from "mongoose";

const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"JOB_SEEKER"
    }).then(()=>{
        console.log("connected to the database");
    }).catch((err)=>{
        console.log("some error occured");
    })
}
export default dbConnection