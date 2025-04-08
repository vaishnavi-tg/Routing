import { Dashboard } from "./pages/Dashboard";
import { Landing } from "./pages/Landing";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"

function App() {
  return (
    <div>

      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

function AppBar() {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => {
        navigate("/")
      }}>Landing </button>
      <button onClick={() => {
        navigate("/dashboard")
      }}>Dashboard </button>

    </div>
  )
}

export default App