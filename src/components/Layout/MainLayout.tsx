
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

export default function MainLayout() {
  return (
    <div className=" w-full">
      
      <Navbar/>

      <main className=" min-h-screen mt-10">
        <Outlet />
      </main>

      <footer className="p-4 bg-slate-800 text-slate-400 text-center">
        &copy; {new Date().getFullYear()} Recargateste
      </footer>
    </div>
  );
}
