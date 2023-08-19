import './App.scss'
import './scss/custom.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './hooks'
import { useEffect } from 'react'
import { Toaster } from 'sonner'
import { PrivateRoute } from './Routes'
import { Home, Login, PagesContainer, Profile, Register } from './Pages';
import { authenticateUser } from './features/application/authSlice'
import { axiosGetUser } from './features/user/userSlice'

function App() {
  const { isAuthenticated, decodedToken } = useAppSelector((state) => state.application);

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
    dispatch(authenticateUser())
    if (decodedToken) dispatch(axiosGetUser(decodedToken?.id))
  }, [isAuthenticated])

  return (
    <div className="App">
      <Toaster richColors />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
