
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

export default function MainLayout() {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col">
      
      <Navbar/>

      <main className="flex-1 p-4">
        <Outlet />
      </main>

      <footer className="p-4 bg-slate-800 text-slate-400 text-center">
        &copy; {new Date().getFullYear()} Recargateste
      </footer>
    </div>
  );
}
