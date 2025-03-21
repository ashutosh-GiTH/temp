import { connectDB } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/models/userModel";
export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const token = req.cookies.get("logtok")?.value;
    if (!token) {
      const response = NextResponse.json(
        { error: "Login token missing" },
        { status: 401 }
      );
      return response;
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!);
      console.log(decoded);
      const response = NextResponse.json({ data: decoded }, { status: 200 });
      return response;
    } catch (error) {
      const response = NextResponse.json(
        { error: "Login token error" },
        { status: 401 }
      );
      return response;
    }
  } catch (error) {
    const response = NextResponse.json(
      { error: "Error while getting the current user" },
      { status: 401 }
    );
    return response;
  }
}
