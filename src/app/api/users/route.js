import mongoose from "mongoose";
import { User } from "@/models/User";
import { isAdmin } from "@/libs/isAdmin";

export async function GET() {
  mongoose.connect(process.env.MONGODB_URI);
  if (await isAdmin()) {
    const users = await User.find();
    return Response.json(users);
  } else {
    return Response.json([])
  }
  
}
