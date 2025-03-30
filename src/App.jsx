
import { Route, Routes } from 'react-router-dom'
import Home from '../public/page/home/Home'
import Navbar from '../public/page/navbar/Navbar'
import Portfolio from 'public/page/Portfolio/portfolio'
import Activity from 'public/page/Activity/Activity'

function App() {

  return (
    <>
      <Navbar/>
      {/* define the alll route */}
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/portfolio" element={<Portfolio />} />  
        <Route path="/activity" element={<Activity />} />  
        <Route path="wallet" element={</>} />  
      

      </Routes>

     </>
  )
}

export default App
