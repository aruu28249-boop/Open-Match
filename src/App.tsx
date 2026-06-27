import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from './components/layout/DashboardLayout'
import DashboardPage from './pages/DashboardPage'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  )
}