import {lazy, Suspense} from "react"
const Dashboard = lazy(()=>import("./pages/Dashboard"))
const Landing =lazy(()=>import("./pages/Landing"))

import {BrowserRouter,Routes,Route,useNavigate} from "react-router-dom"


function App() {
  return (
    <div>
      <BrowserRouter>
      <AppBar/>
        <Routes>
          <Route path={"/"} element={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>
          <Route path={"/dashboard"} element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>}/> 

        </Routes>
      </BrowserRouter>

    </div>
  )
}

function AppBar(){
  const navigate = useNavigate()
  return(
    <div>
      <button onClick={()=>{
        navigate("/")
      }}>Landing</button><br></br>
        <button onClick={()=>{
        navigate("/Dashboard")
      }}>Dashboard</button>
    </div>
  )
}
export default App