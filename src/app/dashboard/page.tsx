"use client";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "@/context/UserContext";
// Define TypeScript interface for user data
interface UserData {
  email: string;
  fullName: string;
  isNitian: boolean;
  isFromCse: boolean;
  isPrime: boolean;
  b1: boolean;
  b2: boolean;
  iat: number;
  exp: number;
}

function Dashboard() {
  const [userData, setUserData] = useState<UserData | null>(null); // Define state type
  const [error, setError] = useState("");
  const updateState = useContext(UserContext).setUserData;
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/users/getCurrent");
        setUserData(response.data.data); // Ensure you're accessing the correct key in the response
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUserData(null);
      }
    };
    fetchUserData();
  }, []); // Run once on mount

  const handleLogOut = async () => {
    try {
      await axios.post("/api/auth/logout");
      updateState(null);
    } catch (error: any) {
      setError(error.message);
    }
  };
  return (
    <div
      className="mt-20 absolute"
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>Your Dashboard</h2>
      <p className="text-red-400 text-2xl">{error}</p>
      {userData ? (
        <div
          style={{
            border: "1px solid white",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Full Name:</strong> {userData.fullName}
          </p>
          <p>
            <strong>NITian:</strong> {userData.isNitian ? "Yes" : "No"}
          </p>
          <p>
            <strong>From CSE:</strong> {userData.isFromCse ? "Yes" : "No"}
          </p>
          <p>
            <strong>Prime Member:</strong> {userData.isPrime ? "Yes" : "No"}
          </p>
          <p>
            <strong>Boolean1:</strong> {userData.b1 ? "Yes" : "No"}
          </p>
          <p>
            <strong>Boolean2:</strong> {userData.b2 ? "Yes" : "No"}
          </p>
        </div>
      ) : (
        <p>User not found</p>
      )}
      <button
        className="bg-red-500 mt-20 rounded-3xl w-30 h-10"
        onClick={handleLogOut}
      >
        Log out
      </button>
    </div>
  );
}

export default Dashboard;
