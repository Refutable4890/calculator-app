import { useState } from 'react'
import './App.css'

// Import components
import Display from './components/Display'
import Keyboard from './components/Keyborad'
import ThemeSwitcher from './components/ThemeSwitcher'

const themes = ['one', 'two', 'three']

export default function App () {
  const [display, setDisplay] = useState('0')
  const [themeIndex, setThemeIndex] = useState(0)

  return <>
    <main className={`theme-${themes[themeIndex]} w-fit p-[25px] bg-[--main-background-color] font-["League_Spartan",sans-serif] font-bold`}>
      <header className='mb-[25px] flex items-center justify-between'>
        <h1 className='text-[--logo-screen-toggle-name-text-color] text-3xl'>calc</h1>
        <ThemeSwitcher themes={themes} themeIndex={themeIndex} setThemeIndex={setThemeIndex} />
      </header>

      <Display display={display} />
      <Keyboard className='mt-[25px]' setDisplay={setDisplay} display={display} />
    </main>
  </>
}