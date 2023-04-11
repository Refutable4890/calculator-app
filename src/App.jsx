import { useState } from 'react'
import './App.css'

// Import components
import Display from './components/Display'
import Keyboard from './components/Keyborad'

export default function App () {
  const [display, setDisplay] = useState('0')

  return <>
    <main className='w-fit p-[25px] bg-very-dark-desaturated-blue(main-background) font-["League_Spartan",sans-serif] font-bold'>
      <h1 className='mb-[25px] text-white text-3xl'>calc</h1>
      <Display display={display} />
      <Keyboard className='mt-[25px]' setDisplay={setDisplay} display={display} />
    </main>
  </>
}