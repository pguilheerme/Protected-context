import { AuthProvider } from './context/AuthProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './components/Login'
import { ProtectedLayout } from './components/ProtectedLayout'
import { Home } from './pages/Home'


export function App() {
  return (
      <AuthProvider>
        <BrowserRouter>
        <Routes>
         <Route path='/profile' element={<ProtectedLayout><Home/></ProtectedLayout>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        </BrowserRouter>
      </AuthProvider>
  )
}
