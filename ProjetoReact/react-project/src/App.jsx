import Home from './pages/Home/'
import Pay from './pages/Pagamento'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagamento" element={<Pay />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App