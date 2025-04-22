import { User } from "@/models/User";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

export async function POST(req) {
  await mongoose.connect(process.env.MONGODB_URI);
  const body = await req.json();
  const pass = body.password;

  if (!pass || pass.length < 5) {
    return new Response(JSON.stringify({
      error: "Password must be at least 5 characters",
    }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const salt = bcrypt.genSaltSync(10);
  body.password = bcrypt.hashSync(pass, salt);

  try {
    const createdUser = await User.create(body);
    return new Response(JSON.stringify(createdUser), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  // return Response.json(createdUser);
}
