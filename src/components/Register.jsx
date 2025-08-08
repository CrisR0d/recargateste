import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      setMessage("Error: " + error.message);
    } else {
      setMessage(
        "¡Registro exitoso! Revisa tu correo para confirmar la cuenta."
      );
    }
    setLoading(false);
  };

  return (
    <div className="bg-slate-800 p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-white text-3xl font-bold mb-6 text-center">
        Crear Cuenta
      </h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-slate-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          placeholder="Contraseña (mínimo 6 caracteres)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="bg-slate-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-md transition-colors disabled:opacity-50"
        >
          {loading ? "Registrando..." : "Registrarse"}
        </button>
      </form>
      {message && <p className="text-white mt-4 text-center">{message}</p>}

      <div className="mt-4 text-center flex justify-center gap-2">
        <span>¿Ya tienes una cuenta?</span>
        <Link
          to="/login"
          className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
        >
          Inicia Sesión
        </Link>
      </div>
    </div>
  );
}

export default Register;
