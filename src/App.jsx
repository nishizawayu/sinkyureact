import { BrowserRouter,Routes,Route } from "react-router-dom";
import './index.css'
import First from './First'
import Switch from './Switch'
import Office from './Office'
import Workstyle from "./workstyle";

function App() {
  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route path= "/" element={<First/>} />
                <Route path= "/switch" element={<Switch/>}/>
                <Route path= "/office" element={<Office/>}/>
                <Route path= "/workstyle" element={<Workstyle/>}/>
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
