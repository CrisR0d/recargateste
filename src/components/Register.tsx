import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { supabase } from "../supabaseClient.js";

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async ({ email, password }) => {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      setError("root", { message: "Error: " + error.message });
    } else {
      setError("root", {
        message: "¡Registro exitoso! Revisa tu correo para confirmar la cuenta.",
      });
      navigate("/login");
    }
  };

  return (
    <div className="bg-slate-800 p-8 rounded-lg shadow-lg w-full m-auto max-w-md">
      <h2 className="text-white text-3xl font-bold mb-6 text-center">Crear Cuenta</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
    
        <div className="flex flex-col gap-1">
          <input
            type="email"
            placeholder="Correo electrónico"
            autoComplete="email"
            className="bg-slate-700 text-white p-3 rounded-md focus:outline-hidden focus:ring-2 focus:ring-green-500"
            {...register("email", {
              required: "El correo es obligatorio.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Ingresa un correo válido.",
              },
            })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <input
            type="password"
            placeholder="Contraseña (mínimo 6 caracteres)"
            autoComplete="current-password"
            className="bg-slate-700 text-white p-3 rounded-md focus:outline-hidden focus:ring-2 focus:ring-green-500"
            {...register("password", {
              required: "La contraseña es obligatoria.",
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres.",
              },
            })}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        {/* Error de servidor (root) */}
        {errors.root && <p className="text-red-500 text-center">{errors.root.message}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-md transition-colors disabled:opacity-50"
        >
          {isSubmitting ? "Registrando..." : "Registrarse"}
        </button>
      </form>

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
