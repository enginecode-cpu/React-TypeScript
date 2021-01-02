import React from 'react'

type GreetingProps = {
  name: string
  mark: string
  onClick: (name: string) => void
}

function Greeting({name, mark, onClick}: GreetingProps) {
  const handleClick = () => onClick(name)

  return (
    <div>Hello {name}{mark}
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

Greeting.defaultProps = {
  mark: '!'
}

export default Greeting