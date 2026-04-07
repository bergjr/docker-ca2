import { useContext } from "react";
import userDirectoryContext from "./UserDirectoryContext";

export default function useUserDirectoryContext() {
  const context = useContext(userDirectoryContext);

  return context;
}
