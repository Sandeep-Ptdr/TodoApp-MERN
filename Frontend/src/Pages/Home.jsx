import React from 'react'
import Todos from '../Components/Todos'

const Home = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center p-3 '>
      <Todos/>
    </div>
  )
}

export default Home