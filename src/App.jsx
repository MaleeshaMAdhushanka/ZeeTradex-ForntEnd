
import { Route, Routes } from 'react-router-dom'
import Home from '../public/page/home/Home'
import Navbar from '../public/page/navbar/Navbar'
import Portfolio from '../public/page/Portfolio/portfolio'
import Activity from '../public/page/Activity/Activity'
import { Wallet } from '../public/page/Wallet/wallet'
import Withdrawal from '../public/page/Withdrawal/withdrawal'
import PaymentDetails from '../public/page/PaymentDetails/PaymentDetails'
import StockDetails from '../public/page/Stock-Details/StockDetails'
import Watchlist from '../public/page/Watchlist/Watchlist'
import Profile from '../public/page/Profile/Profile'
import SearchCoin from '../public/page/Search/SearchCoin'
import Notfound from '../public/page/Notfound/Notfound'

function App() {

  return (
    <>
      <Navbar/>
      {/* define the alll route */}
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/portfolio" element={<Portfolio />} />  
        <Route path="/activity" element={<Activity />} />  
        <Route path="/wallet" element={<Wallet/>} />  
        <Route path="/withdrawal" element={<Withdrawal/>} />
        <Route path="/payment-details" element={<PaymentDetails/>} /> 
        <Route path="/market/:id" element={<StockDetails />} />  
        <Route path="/watchlist" element={<Watchlist />} />  
        <Route path="/profile" element={<Profile />} />  
        <Route path="/search" element={<SearchCoin />} />  
        <Route path="*" element={<Notfound />} />  

      </Routes>

     </>
  )
}

export default App
