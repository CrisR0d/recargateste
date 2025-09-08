
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { supabase } from '../utils/supabaseClient.js';

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  });

  const onSubmit = async ({ email, password }) => {
    const { error, data } = await supabase.auth.signInWithPassword({ email, password });

    console.log(data);
    if (error) {
      setError('root', { message: 'Error: Credenciales inválidas.' });
      return;
    }

    navigate('/');
  };

  return (
    <div className="bg-slate-800 p-8 rounded-lg shadow-lg w-full m-auto max-w-md">
      <h2 className="text-white text-3xl font-bold mb-6 text-center">Iniciar Sesión</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
        <div className="flex flex-col gap-1">
          <input
            type="email"
            placeholder="Correo electrónico"
            autoComplete="email"
            className="bg-slate-700 text-white p-3 rounded-md focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            {...register('email', {
              required: 'El correo es obligatorio.',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Ingresa un correo válido.',
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <input
            type="password"
            placeholder="Contraseña"
            autoComplete="current-password"
            className="bg-slate-700 text-white p-3 rounded-md focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            {...register('password', {
              required: 'La contraseña es obligatoria.',
              minLength: {
                value: 6,
                message: 'La contraseña debe tener al menos 6 caracteres.',
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {errors.root && (
          <p className="text-red-500 text-center">{errors.root.message}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Iniciando...' : 'Entrar'}
        </button>
      </form>

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
