import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
const app=express();

//Middleware to handle Cors and Json Parsing
app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL || '*',
    methods: ["GET","POST","PUT","DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}))

//Port
const port=process.env.PORT

//Routes
//app.use('/api/auth',authRoutes);
//app.use("/api/users",userRoutes);
//app.use("/api/tasks",taskRoutes);
//app.use("/api/reports",reportRoutes);


app.listen(port,()=>{
    console.log("Server Running");
})