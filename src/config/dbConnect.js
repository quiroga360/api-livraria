import mongoose, { mongo } from "mongoose";

async function conectaNaDataBase(params) {
  mongoose.connect(process.env.DB_CONNECTION_STRING);

  return mongoose.connection;
}

export default conectaNaDataBase;
