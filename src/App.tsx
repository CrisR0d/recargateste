
import { useRoutes } from 'react-router-dom';
import { routes } from '@/routes';

export default function App() {
  const element = useRoutes(routes);
  return (
    <div className="bg-slate-900 min-h-screen w-full flex justify-center items-center p-4">
      {element}
    </div>
  );
}
