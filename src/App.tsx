import './App.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './hooks'
import { useEffect } from 'react'
import { getToken } from './features/application/authSlice'
import LoginContainer from './Pages/Login/LoginContainer'
import RegisterContainer from './Pages/Register/RegisterContainer'
import { Toaster } from 'sonner'
import { axiosGetUser } from './features/user/userSlice'
import { PagesContainer } from './Pages/PagesContainer'
import PrivateRoute from './Routes/PrivateRoute'
import ProfileContainer from './Pages/Profile/ProfileContainer'
import HomeContainer from './Pages/Home/HomeContainer'

function App() {
  const { isAuthenticated, user } = useAppSelector((state) => state.application);
  const dispatch = useAppDispatch();

  const router = createBrowserRouter([
    {
      element: <PrivateRoute Component={<PagesContainer />} isAuthenticated={isAuthenticated} />, children: [
        { path: '/', element: <HomeContainer /> },
        { path: '/:username', element: <ProfileContainer /> }
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
