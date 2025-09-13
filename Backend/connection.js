import mongoose from "mongoose";

export const connectMongoDb=async function(connectionUrl){
     const connection=await mongoose.connect(connectionUrl);
     return connection;
};

