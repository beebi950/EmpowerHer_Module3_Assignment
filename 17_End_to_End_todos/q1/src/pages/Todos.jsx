import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import TodoDetails from "../components/todos/TodoDetails";
import Footer from "../components/layout/Footer";

export default function Todos() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <TodoDetails />
      </div>
      <Footer />
    </div>
  );
}
