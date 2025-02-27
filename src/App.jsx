import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from "./pages/landing"
import AboutProduct from './pages/landing/componets/aboutProduct';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
  ])


  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
