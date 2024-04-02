import mongoose, { mongo } from "mongoose";
import validator from "validator";
const applicationSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your first name"],

    },
  
    email:{
        type:String,
        validator:[validator.isEmail,"Please provide valid email id"],
        required:true
    },
    coverLetter:{
        type:String,
        required:true
    },
    phone:{
        type:Number
    },
    address:{
        type:String,
        // required:true
    },
    city:{
        type:String,
        // required:true,
    },
    state:{
        type:String,
        // required:true
    },
    pincode:{
        type:Number,
        // required:true,
    },
    country:{
        type:String,
        // required:true
    },
    resume: {
      public_id: {
        type: String, 
        required: true,
      },
      url: {
        type: String, 
        required: true,
      },
    },

      applicantID: {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        role: {
          type: String,
          enum: ["Job Seeker"],
          required: true,
        },
      },
      employerID: {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        role: {
          type: String,
          enum: ["Employer"],
          required: true,
        },
      },


},{timestamps:true})

export const Application=mongoose.model('Application',applicationSchema)