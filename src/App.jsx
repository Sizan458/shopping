
import './App.css'
import Cart from './component/Cart'
import Shopping1 from './component/shopping1'
import Shopping2 from './component/shopping2'

function App() {
 

  return (
    <>
    <Shopping1></Shopping1>
    <div className='flex gap-4 w-[80%] mx-auto'>
    <Shopping2></Shopping2>
    <Cart></Cart>
    </div>
    </>
  )
}

export default App
