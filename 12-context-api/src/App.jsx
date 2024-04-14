import { useState } from "react"
import Login from "./components/Login"
import Profile from "./components/Profile"
import { ContextProvider } from "./context/UserContext"

function App() {
  const [user,setUser]=useState(null)

  return (
    <ContextProvider value={{user,setUser}}>
      <h1>Context API</h1>
      <Login/>
      <Profile/>
    </ContextProvider>
  )
}

export default App
