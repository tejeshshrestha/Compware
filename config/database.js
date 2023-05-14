import mongoose from "mongoose";
//mongoose.set('strictQuery', false);

const URI = process.env.DATABASE_URL;
console.log('URI value is:$DATABASE_URL');
async function database(URI) {
    
    try {
        const DB_OPTIONS = {
            dbName: "mongodb"
        };
        await mongoose.connect(URI, DB_OPTIONS);
        console.log('Connected Successfully...');
    }
    catch (error) {
        console.log(error);
    }
}

export default database;