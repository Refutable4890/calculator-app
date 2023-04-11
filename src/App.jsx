import { useEffect, useState } from 'react'
import './App.css'

// Import components
import Screen from './components/Screen'
import Keypad from './components/Keypad'
import ThemeSwitcher from './components/ThemeSwitcher'

const themes = ['one', 'two', 'three']

export default function App () {
  const [display, setDisplay] = useState('0')
  const [themeIndex, setThemeIndex] = useState(() => {
    const themeIndex = JSON.parse(localStorage.getItem('themeIndex'))
    return themeIndex ? themeIndex : '0'
  })

  useEffect(() => {
    console.log('effect starts')
    localStorage.setItem('themeIndex', JSON.stringify(themeIndex))
  }, [themeIndex])

  return <>
    <div className={`theme-${themes[themeIndex]} min-h-screen flex items-center justify-center bg-[--main-background-color]`}>
      <main className={`w-fit p-[25px] font-["League_Spartan",sans-serif] font-bold`}>
        <header className='mb-[25px] flex items-center justify-between'>
          <h1 className='text-[--logo-screen-toggle-name-text-color] text-3xl'>calc</h1>
          <ThemeSwitcher themes={themes} themeIndex={themeIndex} setThemeIndex={setThemeIndex} />
        </header>

        <Screen display={display} />
        <Keypad className='mt-[25px]' setDisplay={setDisplay} display={display} />
      </main>
    </div>
  </>
}