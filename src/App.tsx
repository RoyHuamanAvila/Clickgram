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
import { axiosGetUser } from './features/user/userSlice'

function App() {
  const { isAuthenticated, user } = useAppSelector((state) => state.application);
  const dispatch = useAppDispatch();

  const router = createBrowserRouter([
    { path: '/', element: <PrivateRoute Component={<Home />} isAuthenticated={isAuthenticated} /> },
    { path: '/login', element: <LoginContainer /> },
    { path: '/register', element: <RegisterContainer /> },
  ])

  useEffect(() => {
    dispatch(getToken());
  }, [])

  useEffect(() => {
    if (isAuthenticated) dispatch(axiosGetUser(user?._id!))
  }, [isAuthenticated])

  return (
    <div className="App">
      <Toaster richColors />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
