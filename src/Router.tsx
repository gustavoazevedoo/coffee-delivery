import { Route, Routes } from 'react-router-dom'
import { Chekout } from './pages/Chekout'
import { Home } from './pages/Home'
import { Success } from './pages/Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chekout" element={<Chekout />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  )
}
