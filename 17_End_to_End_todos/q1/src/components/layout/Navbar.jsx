import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <div className="h-14 bg-black text-white flex items-center px-4 justify-between">
      <h1 className="font-bold">Todos App</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
