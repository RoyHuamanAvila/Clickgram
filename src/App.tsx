import './App.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, Login, Register } from './Pages'
import PrivateRoute from './Routes/PrivateRoute'
import { useAppDispatch, useAppSelector } from './hooks'
import { useEffect } from 'react'
import { getToken } from './features/application/authSlice'

function App() {
  const token = useAppSelector((state) => state.application.token);
  const dispatch = useAppDispatch();

  const router = createBrowserRouter([
    { path: '/', element: <PrivateRoute Component={<Home />} isAuthenticated={false} /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
  ])

  useEffect(() => {
    dispatch(getToken());
  }, [])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
