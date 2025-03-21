"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function GoogleCallbackPage() {
  const router = useRouter();
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (!code) {
      setStatus(
        "Error while authentication , as we are unable to fetch code from the url"
      );
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/auth/google?code=${code}`);
        const data = await response.json();
        if (response.ok) {
          localStorage.setItem("email", data.email);
          setStatus("Success, Proceed to set credentials");
          router.push("/fillCredentials");
        } else {
          setStatus(
            data.error || "Error during Google callback, Please retry "
          );
        }
      } catch (error) {
        setStatus("Network error");
      }
    };
    fetchData();
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>{status}</p>
    </div>
  );
}
