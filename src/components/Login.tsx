import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient.js';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setError('Error: Credenciales inválidas.');
    } else {
      navigate('/dashboard'); 
    }
    setLoading(false);
  };

  return (
    <div className="bg-slate-800 p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-white text-3xl font-bold mb-6 text-center">Iniciar Sesión</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-slate-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="bg-slate-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition-colors disabled:opacity-50"
        >
          {loading ? 'Iniciando...' : 'Entrar'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

      <div className="mt-4 text-center flex justify-center gap-2 text-white">
        <span>¿No tienes una cuenta?</span>
        <Link
          to="/register"
          className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
        >
          Regístrate
        </Link>
      </div>
    </div>
  );
}

export default Login;