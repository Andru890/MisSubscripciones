
import { useState } from 'react'
import './App.css'
import FormAddMoney from './components/FormAddMoney'
import Header from './components/Header'
import MainControl from './components/MainControl'

function App() {
  const [count, setCount] = useState(0)
  const [isVlid, setIsValid] = useState(false)

  const component = isVlid
    ? <MainControl count={count} />
    : <FormAddMoney setCount={setCount} setIsValid={setIsValid} />

  return (
    <div className='App'>
      <Header />
      {component}
    </div>
  )
}

export default App