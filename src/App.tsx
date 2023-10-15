import './App.scss'
import './scss/custom.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './hooks'
import { useEffect } from 'react'
import { Toaster } from 'sonner'
import { LocationDisplay, PrivateRoute } from './Routes'
import { Home, Login, PagesContainer, Profile, Register } from './Pages';
import { verifyToken } from './features/application/authSlice'
import { axiosGetUser } from './features/user/userSlice'

function App() {
  const { isAuthenticated, decodedToken } = useAppSelector((state) => state.application);

  const dispatch = useAppDispatch();

  const router = createBrowserRouter([
    {
      element: <LocationDisplay />, children: [
        {
          element: <PrivateRoute Component={<PagesContainer />} isAuthenticated={isAuthenticated} />, children: [
            { path: '/', element: <Home /> },
            { path: '/:username', element: <Profile /> }
          ]
        },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
      ]
    }
  ])

  const handleGetUser = () => {
    dispatch(verifyToken())
    if (decodedToken) dispatch(axiosGetUser(decodedToken?.id))
  }

  useEffect(() => {
    handleGetUser()
  }, [isAuthenticated])

  return (
    <div className="App">
      <Toaster richColors />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
