import './App.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './Pages'
import { useAppDispatch, useAppSelector } from './hooks'
import { useEffect } from 'react'
import { getToken } from './features/application/authSlice'
import LoginContainer from './Pages/Login/LoginContainer'
import RegisterContainer from './Pages/Register/RegisterContainer'
import { Toaster } from 'sonner'
import { axiosGetUser } from './features/user/userSlice'
import { PagesContainer } from './Pages/PagesContainer'
import { Profile } from './Pages/Profile'
import PrivateRoute from './Routes/PrivateRoute'

function App() {
  const { isAuthenticated, user } = useAppSelector((state) => state.application);
  const dispatch = useAppDispatch();

  const router = createBrowserRouter([
    {
      element: <PrivateRoute Component={<PagesContainer />} isAuthenticated={isAuthenticated} />, children: [
        { path: '/', element: <Home /> },
        { path: '/:username', element: <Profile /> }
      ]
    },
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
