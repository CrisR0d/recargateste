
import { useRoutes } from 'react-router-dom';
import { routes } from '@/routes';

export default function App() {
  const element = useRoutes(routes);
  return (
    <div className="bg-white min-h-screen w-auto flex justify-center items-center p-4">
      {element}
    </div>
  );
}
