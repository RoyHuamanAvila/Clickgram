import './App.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './Pages'
import PrivateRoute from './Routes/PrivateRoute'
import { useAppDispatch, useAppSelector } from './hooks'
import { useEffect } from 'react'
import { getToken } from './features/application/authSlice'
import LoginContainer from './Pages/Login/LoginContainer'
import RegisterContainer from './Pages/Register/RegisterContainer'
import { Toaster } from 'sonner'

function App() {
  const isAuthenticated = useAppSelector((state) => state.application.isAuthenticated);
  const dispatch = useAppDispatch();

  const router = createBrowserRouter([
    { path: '/', element: <PrivateRoute Component={<Home />} isAuthenticated={isAuthenticated} /> },
    { path: '/login', element: <LoginContainer /> },
    { path: '/register', element: <RegisterContainer /> },
  ])

  useEffect(() => {
    dispatch(getToken());
  }, [])

  return (
    <div className="App">
      <Toaster richColors />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
