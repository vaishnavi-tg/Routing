import { Dashboard } from "./pages/Dashboard";
import { Landing } from "./pages/Landing"
import {BrowserRouter,Routes,Route} from "react-router-dom"



function App() {
    return (
        <div>
            <div>
                <button onClick={()=>{
                    window.location.href="/"}}>Landing Page </button>
                <button onClick={()=>{
                        window.location.href="/dashboard"}}>Dashboard Page </button>   
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/" element={<Landing/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App