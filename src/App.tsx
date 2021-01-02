import React from 'react'
import Greeting from './components/Greeting'

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(name)
  }
  
  return <Greeting name="react" onClick={onClick}></Greeting>
}

export default App