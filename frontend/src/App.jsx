import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext/AuthContext";
import { LoginModal } from "./components/LoginModal/LoginModal";
import { RegisterModal } from "./components/RegisterModal/RegisterModal";
import { router } from "./routes";

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <LoginModal />
      <RegisterModal />
    </AuthProvider>
  );
}
