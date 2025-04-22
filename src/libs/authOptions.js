import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "@/libs/mongoConnect";
import { User } from "@/models/User";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

export const authOptions = {
  debug: false,
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  jwt: {
    secret: process.env.SECRET,
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "test@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          console.log("❌ No credentials received");
          return null;
        }

        const email = credentials?.email;
        const password = credentials?.password;

        console.log("📥 Login attempt:", { email, password });

        try {
          await mongoose.connect(process.env.MONGODB_URI);
        } catch (err) {
          console.log("❌ Failed to connect to MongoDB", err);
          return null;
        }

        const user = await User.findOne({ email });

        if (!user) {
          console.log("❌ User not found for email:", email);
          return null;
        }

        console.log("🔐 Checking password for user:", user.email);
        console.log("Stored password hash:", user.password);

        // const passwordOk = user && bcrypt.compareSync(password, user.password);

        if (!process.env.MONGODB_URI)
          throw new Error("MONGODB_URI not defined");

        // if (passwordOk) {
        //   return user;
        // }

        // return null;

        const passwordOk = bcrypt.compareSync(password, user.password);

        if (!passwordOk) {
          console.log("❌ Invalid password");
          return null;
        }

        console.log("✅ Login successful:", user.email);
        if (passwordOk) {
          console.log("✅ Login successful:", user.email);
          console.log("✅ Returning user:", {
            id: user._id.toString(),
            email: user.email,
            name: user.name || user.email,
          });
        
          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name || user.email,
          };
        }
      },
    }),
  ],
};