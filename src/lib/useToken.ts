// It's almost like a React hook
export default function useToken(): [
  string | null,
  (token: string | null) => void
] {
  return [
    localStorage.getItem("taskalla-token"),
    (token: string | null) => {
      if (!token) {
        return localStorage.removeItem("taskalla-token");
      }

      localStorage.setItem("taskalla-token", token);
    },
  ];
}
