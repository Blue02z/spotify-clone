import NavBar from './components/NavBar'
import './App.css'
import Aside from './components/Aside'
import PrincipalContent from './components/PrincipalContent'
function App() {
  

  return (
    <>
      <div className='bg-[black]'>
        <NavBar/>
        <div className='flex mx-2 gap-2 h-[550px] justify-center'>
          <Aside/>
          <PrincipalContent/>
        </div>
      </div>
    </>
  )
}

export default App
