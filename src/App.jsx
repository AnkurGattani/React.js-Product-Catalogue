import React from 'react'
import { Link } from 'react-router-dom'

function App() {

  return (
    <div className='min-h-screen flex flex-wrap'>
      <header className='w-full h-[10vh] px-5 py-2 duration-300 fixed z-900 border-b-2 border-black backdrop-blur-md bg-white/30'>
        <div className='w-full h-full mx-auto relative flex justify-between items-center py-3 '>
          <div className='h-full p-0 flex items-center'>
            <Link to="/" >
              <h1 className='text-2xl font-bold'>Product Catalog</h1>
            </Link>
          </div>
        </div>
      </header>

    </div>
  )
}

export default App
