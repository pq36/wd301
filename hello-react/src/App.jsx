import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskCard from './TaskCard'
import Header from './header.jsx'

function App() {

  return (
    <>
      <Header />
      <div className='flex p-2 m-5 justify-center gap-4'>
        <div className='border-2 border-slate-950 rounded-xl p-3 Pending'>
          <h2 className='text-2xl font-bold p-2 text-gray-500'>Pending</h2>
          <TaskCard title="Build the website with static content" dueDate="10th April" assigneeName="Rohit S"/>
          <TaskCard title="Add a blog" dueDate="10th April" assigneeName="Rohit S"/>
        </div>
        <div className='border-2 border-slate-950 rounded-xl p-3 Done'>
          <h2 className='text-2xl font-bold p-2 text-gray-500'>Done</h2>
          <TaskCard title="Design the mockup" completedAtDate="10th April" assigneeName="Rohit S"/>
          <TaskCard title="Get the approval from principal" completedAtDate="20th April" assigneeName="Ajay S"/>
        </div>
      </div>
    </>
  )
}

export default App
