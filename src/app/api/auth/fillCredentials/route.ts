import { connectDB } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/models/userModel";
import Eauth from "@/models/eAuthModel";

// Helper to generate a random 7-character alphanumeric ID prefixed with "USR-"
function generateUserID(req: NextRequest): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < 7; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `SCSE-${id}`;
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    // Retrieve the eAuthToken cookie
    const eAuthTokenCookie = req.cookies.get("eAuthToken");
    console.log("level 1 eauthtokencookie", eAuthTokenCookie);
    if (!eAuthTokenCookie) {
      const response = NextResponse.json(
        { error: "Authentication token missing" },
        { status: 401 }
      );
      response.cookies.delete("eAuthToken");
      return response;
    }
    const eAuthToken = eAuthTokenCookie.value;

    // Verify the eAuth token using JWT
    let decoded: any;
    try {
      decoded = await jwt.verify(eAuthToken, process.env.JWT_SECRET!);
      console.log("level2 decoded", decoded);
    } catch (err) {
      const response = NextResponse.json(
        { error: "Invalid or expired authentication token" },
        { status: 401 }
      );
      response.cookies.delete("eAuthToken");
      return response;
    }

    // Extract email from the token payload
    const tokenEmail: string = decoded.email;
    if (!tokenEmail) {
      const response = NextResponse.json(
        { error: "Invalid token payload" },
        { status: 401 }
      );
      response.cookies.delete("eAuthToken");
      return response;
    }

    // Find the Eauth record by email

    const eAuthRecord = await Eauth.findOne({ email: tokenEmail });
    console.log("level 3 eauthrecord", eAuthRecord);
    if (!eAuthRecord) {
      const response = NextResponse.json(
        { error: "Authentication record not found" },
        { status: 401 }
      );
      response.cookies.delete("eAuthToken");
      return response;
    }

    // Verify that the token stored in Eauth matches the token from the cookie
    if (eAuthRecord.token !== decoded.token) {
      console.log("nahi equal nikla kaand");
      const response = NextResponse.json(
        { error: "Token mismatch" },
        { status: 401 }
      );
      response.cookies.delete("eAuthToken");
      return response;
    }

    // Extract request body (make sure to call req.json() as NextRequest does not expose req.body directly)
    const { email, fullName, password, collegeName } = await req.json();
    // console.log("lev4", req.json());
    // Ensure that the email from the request body matches the one in the token
    if (email !== tokenEmail) {
      return NextResponse.json({ error: "Email mismatch" }, { status: 400 });
    }

    // Determine booleans
    const isNitian = email.endsWith("@nitjsr.ac.in");
    // Regex: 4 digits, followed by "ugcs", followed by 3 digits, ending with "@nitjsr.ac.in" (case-insensitive)
    const isFromCse = /^[0-9]{4}ugcs[0-9]{3}@nitjsr\.ac\.in$/i.test(email);

    // Create a new user document using the random 7-character userID
    const newUser = new User({
      email,
      userID: generateUserID(req),
      fullName,
      password, // In production, make sure to hash the password before saving.
      collegeName,
      isNitian,
      isFromCse,
      isPrime: false,
      b1: false,
      b2: false,
    });
    await newUser.save();

    // Delete the temporary Eauth record and remove its cookie
    await Eauth.deleteOne({ email: tokenEmail });

    // Generate a new JWT token (logtok) containing email, fullName, and the boolean values.
    const logtokPayload = {
      email,
      fullName,
      isNitian,
      isFromCse,
      isPrime: false,
      b1: false,
      b2: false,
    };
    const logtok = await jwt.sign(logtokPayload, process.env.JWT_SECRET!, {
      expiresIn: "60d",
    });

    // Set the logtok as a cookie and remove the eAuthToken cookie
    const response = NextResponse.json({
      message: "User registered successfully",
    });
    response.cookies.set("logtok", logtok, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 24 * 60 * 60, // 7 days in seconds
    });
    response.cookies.delete("eAuthToken");

    return response;
  } catch (error) {
    console.error("Error in user registration:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
