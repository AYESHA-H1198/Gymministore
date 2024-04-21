// bg-[#808080]
// yellow-bg-[#FEE715]
// yellow-[#FFD700]
//footer-bg[rgb(99, 99, 99)]
import './App.css'
import Blogs from './Components/Blogs'
import Calculation from './Components/Calculation'
import Credit from './Components/Credit'
import Feedbacks from './Components/Feedbacks'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Products from './Components/Products'
import Sell from './Components/Sell'

function App() {
  return (
    <main className='max-w-screen-xl mx-auto'>
    <Navbar />
    <Hero />
    <Sell />
    <Products />
    <Calculation />
    <Feedbacks />
    <Blogs />
    <Footer />
    <Credit />
    </main>
  )
}

export default App