import mongoose from "mongoose";

type connectionObject = {
  isConnected?: number;
};

const connection: connectionObject = {};

export async function connectDB(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connecte by database");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URL || "", {}); //study here
    console.log("db", db);
    connection.isConnected = db.connections[0].readyState;
    console.log("DB successfully connected");
  } catch (error) {
    console.log("DB connection failed", error);
    process.exit(1);
  }
}

