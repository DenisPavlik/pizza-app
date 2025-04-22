import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/authOptions";
import { Order } from "@/models/Order";
import { isAdmin } from "@/libs/isAdmin";

export async function GET(req) {
  mongoose.connect(process.env.MONGODB_URI);

  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  const admin = await isAdmin();

  const url = new URL(req.url);
  const _id = url.searchParams.get('_id')
  if (_id) {
    return Response.json(await Order.findById(_id))
  }

  if (admin) {
    return Response.json(await Order.find())
  }

  if (userEmail) {
    return Response.json(await Order.find({userEmail}))
  }

  return Response.json([])

}
