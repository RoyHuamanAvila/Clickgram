import './App.scss'
import './scss/custom.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './hooks'
import { useEffect } from 'react'
import { getToken } from './features/application/authSlice'
import { Toaster } from 'sonner'
import { axiosGetUser } from './features/user/userSlice'
import { PrivateRoute } from './Routes'
import { Home, Login, PagesContainer, Profile, Register } from './Pages';

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
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
  ])

  useEffect(() => {
    dispatch(getToken());
  }, [])

  useEffect(() => {
    if (isAuthenticated && user?._id) dispatch(axiosGetUser(user._id))
  }, [isAuthenticated])

  return (
    <div className="App">
      <Toaster richColors />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
