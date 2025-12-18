import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const WebLayout = () => {
  return (
    <div className="web-layout">
      <Navbar />
      <main className='min-h-[100vh]'>
      <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default WebLayout
