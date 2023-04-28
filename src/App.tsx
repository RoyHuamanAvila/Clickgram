import './App.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, Login, Register } from './Pages'
import PrivateRoute from './Routes/PrivateRoute'

const router = createBrowserRouter([
  { path: '/', element: <PrivateRoute Component={<Home />} isAuthenticated={false} /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
