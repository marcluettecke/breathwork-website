import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Atemtherapie from './pages/Atemtherapie'
import About from './pages/About'
import Termine from './pages/Termine'
import Kontakt from './pages/Kontakt'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'

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
      {
        path: 'impressum',
        element: <Impressum />,
      },
      {
        path: 'datenschutz',
        element: <Datenschutz />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App