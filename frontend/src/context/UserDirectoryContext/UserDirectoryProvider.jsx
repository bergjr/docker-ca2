import { useState } from "react";
import UserDirectoryContext from "./UserDirectoryContext";

export default function UserDirectoryProvider({ children }) {
  const [users, setUsers] = useState([
    { username: "berg", password: "123" },
    { username: "tess", password: "1234" },
    { username: "Sola", password: "12345" },
    // Add more users as needed
  ]);

  return (
    <UserDirectoryContext.Provider value={{ users, setUsers }}>
      {children}
    </UserDirectoryContext.Provider>
  );
}
