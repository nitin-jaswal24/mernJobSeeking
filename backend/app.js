import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import cookieParser from 'cookie-parser'
import fileUpload from 'express-fileupload'

import jobRouter from './routes/jobRouter.js'
import userRouter from './routes/userRouter.js'
import applicationRouter from './routes/applicationRouter.js'
import dbConnection from './database/dbConnection.js'
import { errorMiddleware } from './middlewares/error.js'
// import bcrypt from 'brcypt'

const app=express()
import multer from 'multer'
// import { Resume } from './models/Resume.js'
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './files')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now();
//       cb(null, uniqueSuffix + file.originalname)
//     }
//   })
  
//   const upload = multer({ storage: storage })

// app.post("/upload-files",upload.single("file"),async(req,res)=>{
//      const fileName=req.file.fileName;
//      try{
//         await Resume.create({
//             pdf:fileName
//         })
//      }catch(err){
//         console.log(err);
//      }
//     console.log(req.file);
// })


app.use(cors({
    origin:process.env.FRONTEND_URL ,
    methods:['GET','POST','DELETE','PUT'],
    credentials:true
}))
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'/tmp/',

})
);

app.use('/api/v1/user',userRouter)
app.use('/api/v1/application',applicationRouter)
app.use('/api/v1/job',jobRouter)

dbConnection();

app.use(errorMiddleware);

export default app