"use client"; 

import { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";


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


interface UserContextValue {
  userData: UserData | null;
  setUserData: (userData: UserData | null) => void;
}


export const UserContext = createContext<UserContextValue>({
  userData: null,
  setUserData: () => {},
});


export function UserProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/users/getCurrent");
        setUserData(response.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUserData(null);
      }
    };

    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
