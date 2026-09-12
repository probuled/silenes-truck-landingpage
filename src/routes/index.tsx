import { createBrowserRouter } from 'react-router';
import { siteContent } from '../data/content';
import { Home } from '../pages/Home';
import type { SiteContent } from '../types/content';

export function homeLoader(): SiteContent {
  return siteContent;
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: homeLoader,
  },
]);
