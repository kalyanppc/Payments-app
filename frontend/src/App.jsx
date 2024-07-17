import { BrowserRouter,Routes,Route } from "react-router-dom"
import Signin from "./pages/Signin"
import Dashboard from "./pages/Dashboard"
import Signup from "./pages/Signup"
import Send from "./pages/Send"
import Landing from "./pages/Landing"
import NotFound from "./pages/NotFound";

function App(){
  return(
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/send" element={<Send />} />
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App