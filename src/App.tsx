import { RouterProvider } from 'react-router';
import { router } from './routes';
import { SmoothScroll } from './components/SmoothScroll';

function App() {
  return (
    <SmoothScroll>
      <RouterProvider router={router} />
    </SmoothScroll>
  );
}

export default App;
