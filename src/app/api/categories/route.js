import { Category } from "@/models/Category";
import mongoose from "mongoose";
import { isAdmin } from "@/libs/isAdmin";

export async function POST(req) {
  mongoose.connect(process.env.MONGODB_URI);
  const { name } = await req.json();
  if (await isAdmin()) {
    const categoryDoc = await Category.create({ name });
    return Response.json(categoryDoc);
  } else {
    return Response.json({});
  }
}

export async function GET() {
  mongoose.connect(process.env.MONGODB_URI);
  return Response.json(await Category.find());
}

export async function PUT(req) {
  mongoose.connect(process.env.MONGODB_URI);
  const { _id, name } = await req.json();
  if (await isAdmin()) {
    await Category.updateOne({ _id }, { name });
  }
  return Response.json(true);
}

export async function DELETE(req) {
  mongoose.connect(process.env.MONGODB_URI);
  const url = new URL(req.url);
  const _id = url.searchParams.get("_id");
  if (await isAdmin()) {
    await Category.deleteOne({ _id });
  }
  return Response.json(true);
}
