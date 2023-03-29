
import mongoose from "mongoose";
mongoose.set('strictQuery', true);

export const Connection= async (username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@ecommerce-web.1m1rwm8.mongodb.net/ecommerce-web?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true })
        console.log("database connected successfully")
    }catch(error){
        console.log("error connecting db",error.message);
    }
}

export default Connection;  