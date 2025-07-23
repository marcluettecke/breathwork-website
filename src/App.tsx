import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Yoga from './pages/Yoga'
import Atemtherapie from './pages/Atemtherapie'
import About from './pages/About'
import Termine from './pages/Termine'
import Kontakt from './pages/Kontakt'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'yoga',
        element: <Yoga />,
      },
      {
        path: 'atemtherapie',
        element: <Atemtherapie />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'termine',
        element: <Termine />,
      },
      {
        path: 'kontakt',
        element: <Kontakt />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App