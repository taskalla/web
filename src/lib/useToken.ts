import { useState, useEffect } from "react";

export default function useToken(): [string | null, (token: string) => void] {
  const [value, setValue] = useState(localStorage.getItem("token"));

  useEffect(() => {
    localStorage.setItem("token", value || "");
  }, [value]);

  return [value, setValue];
}
