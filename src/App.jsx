import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

function WelcomePage() {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold text-white mb-8">
        Bienvenido a Recargateste
      </h1>
      <div className="flex justify-center gap-4">
        <Link
          to="/login"
          className="text-green-400 hover:text-green-300 text-2xl font-semibold transition-colors"
        >
          Inicia Sesión
        </Link>
        <span className="text-slate-500 text-2xl">o</span>
        <Link
          to="/register"
          className="text-blue-400 hover:text-blue-300 text-2xl font-semibold transition-colors"
        >
          Regístrate
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-slate-900 min-h-screen w-full flex justify-center items-center p-4">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
