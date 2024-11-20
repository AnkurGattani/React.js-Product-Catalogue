import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='min-h-screen min-w-full flex'>
      <Header />
      <main className='mt-[8vh] min-w-full'>
        <Outlet />
      </main>
    </div>
  )
}

export default App
