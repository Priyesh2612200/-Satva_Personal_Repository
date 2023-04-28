import mongoose, * as Mongoose from 'mongoose'
import * as dotenv from 'dotenv'


export default new class MongoDBConnection{
    async dbConnect(){
        dotenv.config()
        
        const DBConnectionString:string = process.env.BD_CONNECTION_STRING as string;
        mongoose.connect(DBConnectionString)

        .then(() => console.log("MongoDB Connection successfully!"))
        .catch( err => console.log(err));
    }
}