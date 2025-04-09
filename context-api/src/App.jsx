import { useContext, useState } from "react"
import { CountContex } from "./context"

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <CountContex.Provider value={count}>
        <Count setCount={setCount} />
      </CountContex.Provider>
    </div>
  )
}

function Count({  setCount }) {
  return (
    <div>
      <CountRender />
      <Buttons  setCount={setCount} />
    </div>
  )
}

function CountRender() {
  const count = useContext(CountContex)
  return (
    <div>
      {count}
    </div>
  )
}

function Buttons({setCount }) {
  const count = useContext(CountContex)

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  );
}


export default App