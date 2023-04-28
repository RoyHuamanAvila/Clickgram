import './App.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, Register } from './Pages'
import PrivateRoute from './Routes/PrivateRoute'
import { useAppDispatch, useAppSelector } from './hooks'
import { useEffect } from 'react'
import { getToken } from './features/application/authSlice'
import LoginContainer from './Pages/Login/LoginContainer'

function App() {
  const isAuthenticated = useAppSelector((state) => state.application.isAuthenticated);
  const dispatch = useAppDispatch();

  const router = createBrowserRouter([
    { path: '/', element: <PrivateRoute Component={<Home />} isAuthenticated={isAuthenticated} /> },
    { path: '/login', element: <LoginContainer /> },
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
