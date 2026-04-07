// import { useState } from "react";
// import { AuthContext } from "./context";
// import useUserDirectoryContext from "../UserDirectoryContext/useUserDirectoryContext";

// function AuthContextProvider({ children }) {
//   const [countClick, setCountClick] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [loginName, setLoginName] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   /* Extracts users from the userdirectorycontext */
//   const { users } = useUserDirectoryContext();

//    const handleLogin = () => {
//     const user = users.find(
//       (user) => user.username === loginName && user.password === loginPassword
//     );
//     if (user) {
//       setIsLoggedIn(true);
//     }
//   };

//   /* Check if credentials exist in the users array */ 
//   const checkLoginCredentials = (username, password) => {
//     return users.find((user) => user.username === username && user.password === password);
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         countClick,
//         setCountClick,
//         isModalOpen,
//         setIsModalOpen,
//         loginName,
//         setLoginName,
//         loginPassword,
//         setLoginPassword,
//         isLoggedIn,
//         setIsLoggedIn,
//         handleLogin,
//         checkLoginCredentials
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export default AuthContextProvider;
