import "dotenv/config";
import express from "express";
import { connectMongoDb } from "./connection.js";

const app = express();
const PORT = process.env.PORT ?? 8000;

connectMongoDb(process.env.MONGODB_URL).then(console.log("MongoDB connected"));

app.use(express.json());
app.get('/',async (req,res)=>{
    return res.json({message:'MongoDb Connected'});
})

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
