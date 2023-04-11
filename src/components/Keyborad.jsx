import { useState } from "react"
import Button from "./Button"

export default function Keyboard ({ className, display, setDisplay }) {
  const [operand, setOperand] = useState(null)
  const [operator, setOperator] = useState(null)
  const [hasJustClickedOperator, setHasJustClickedOperator] = useState(false)

  console.log('display', display)
  console.log('operandOne', operand)
  console.log('operator', operator)

  function handleBtnClick (character) {
    // Click DEL
    if (character.toLowerCase() === 'DEL'.toLowerCase()) {
      if (display.length === 1) {
        setDisplay('0')
      } else {
        setDisplay(d => d.toString().slice(0, -1))
      }
    }
    // Click .
    else if (character === '.') {
      if (!display.includes('.')) {
        setDisplay(d => d.toString() + character.toString())
      }
    }
    // Click 0-9
    else if (
      character === '0'
      || character === '1'
      || character === '2'
      || character === '3'
      || character === '4'
      || character === '5'
      || character === '6'
      || character === '7'
      || character === '8'
      || character === '9'
    ) {
      if (display === '0') {
        setDisplay(character)
      } else {
        if (hasJustClickedOperator) {
          setDisplay(character)
          setHasJustClickedOperator(false)
        } else {
          setDisplay(d => d.toString() + character.toString())
        }
      }
    }
    // Click +, -, ×, ÷
    else if (character === '+'
      || character === '-'
      || character === '×'
      || character === '÷') {
      setOperand(Number(display))
      setOperator(character)
      setHasJustClickedOperator(true)
    }
    // Click =
    else if (character === '=') {
      if (operand !== null && operator !== null) {
        let result = null
        const operandTwo = Number(display)
        if (operator == '+') {
          result = operand + operandTwo
        } else if (operator == '-') {
          result = operand - operandTwo
        } else if (operator == '×') {
          result = operand * operandTwo
        } else if (operator == '÷') {
          result = operand / operandTwo
        }
        setOperand(null)
        setOperator(null)
        setDisplay(result.toString())
      }
    }
    // Click RESET
    else if (character.toLowerCase() === 'RESET'.toLocaleLowerCase()) {
      setOperand(null)
      setOperator(null)
      setDisplay('0')
    }
  }


  return <>
    <section className={`${className} w-fit p-[25px] rounded-[10px] grid grid-rows-[repeat(5,60px)] grid-cols-[repeat(4,60px)] gap-[15px] bg-very-dark-desaturated-blue(key-background) text-3xl`}>
      <Button className='rounded-[5px] shadow-[0_5px] shadow-grayish-orange bg-light-grayish-orange text-very-dark-grayish-blue active:[filter:contrast(130%)] active:[transform:scaleY(.95)_translateY(2.5%)]' character='7' handleClick={handleBtnClick} />
      <Button className='rounded-[5px] shadow-[0_5px] shadow-grayish-orange bg-light-grayish-orange text-very-dark-grayish-blue active:[filter:contrast(130%)] active:[transform:scaleY(.95)_translateY(2.5%)]' character='8' handleClick={handleBtnClick} />
      <Button className='rounded-[5px] shadow-[0_5px] shadow-grayish-orange bg-light-grayish-orange text-very-dark-grayish-blue active:[filter:contrast(130%)] active:[transform:scaleY(.95)_translateY(2.5%)]' character='9' handleClick={handleBtnClick} />
      <Button className='rounded-[5px] shadow-[0_5px] shadow-desaturated-dark-blue(key-shadow) bg-desaturated-dark-blue text-white text-xl active:[filter:contrast(130%)] active:[transform:scaleY(.95)_translateY(2.5%)]' character='DEL' handleClick={handleBtnClick} />
      <Button className='rounded-[5px] shadow-[0_5px] shadow-grayish-orange bg-light-grayish-orange text-very-dark-grayish-blue active:[filter:contrast(130%)] active:[transform:scaleY(.95)_translateY(2.5%)]' character='4' handleClick={handleBtnClick} />
      <Button className='rounded-[5px] shadow-[0_5px] shadow-grayish-orange bg-light-grayish-orange text-very-dark-grayish-blue active:[filter:contrast(130%)] active:[transform:scaleY(.95)_translateY(2.5%)]' character='5' handleClick={handleBtnClick} />
      <Button className='rounded-[5px] shadow-[0_5px] shadow-grayish-orange bg-light-grayish-orange text-very-dark-grayish-blue active:[filter:contrast(130%)] active:[transform:scaleY(.95)_translateY(2.5%)]' character='6' handleClick={handleBtnClick} />
      <Button className='rounded-[5px] shadow-[0_5px] shadow-grayish-orange bg-light-grayish-orange text-very-dark-grayish-blue active:[filter:contrast(130%)] active:[transform:scaleY(.95)_translateY(2.5%)]' character='+' handleClick={handleBtnClick} />
      <Button className='rounded-[5px] shadow-[0_5px] shadow-grayish-orange bg-light-grayish-orange text-very-dark-grayish-blue active:[filter:contrast(130%)] active:[transform:scaleY(.95)_translateY(2.5%)]' character='1' handleClick={handleBtnClick} />
      <Button className='rounded-[5px] shadow-[0_5px] shadow-grayish-orange bg-light-grayish-orange text-very-dark-grayish-blue active:[filter:contrast(130%)] active:[transform:scaleY(.95)_translateY(2.5%)]' character='2' handleClick={handleBtnClick} />
      <Button className='rounded-[5px] shadow-[0_5px] shadow-grayish-orange bg-light-grayish-orange text-very-dark-grayish-blue active:[filter:contrast(130%)] active:[transform:scaleY(.95)_translateY(2.5%)]' character='3' handleClick={handleBtnClick} />
      <Button className='rounded-[5px] shadow-[0_5px] shadow-grayish-orange bg-light-grayish-orange text-very-dark-grayish-blue active:[filter:contrast(130%)] active:[transform:scaleY(.95)_translateY(2.5%)]' character='-' handleClick={handleBtnClick} />
      <Button className='rounded-[5px] shadow-[0_5px] shadow-grayish-orange bg-light-grayish-orange text-very-dark-grayish-blue active:[filter:contrast(130%)] active:[transform:scaleY(.95)_translateY(2.5%)]' character='.' handleClick={handleBtnClick} />
      <Button className='rounded-[5px] shadow-[0_5px] shadow-grayish-orange bg-light-grayish-orange text-very-dark-grayish-blue active:[filter:contrast(130%)] active:[transform:scaleY(.95)_translateY(2.5%)]' character='0' handleClick={handleBtnClick} />
      <Button className='rounded-[5px] shadow-[0_5px] shadow-grayish-orange bg-light-grayish-orange text-very-dark-grayish-blue active:[filter:contrast(130%)] active:[transform:scaleY(.95)_translateY(2.5%)]' character='÷' handleClick={handleBtnClick} />
      <Button className='rounded-[5px] shadow-[0_5px] shadow-grayish-orange bg-light-grayish-orange text-very-dark-grayish-blue active:[filter:contrast(130%)] active:[transform:scaleY(.95)_translateY(2.5%)]' character='×' handleClick={handleBtnClick} />
      <Button className='col-span-2 rounded-[5px] shadow-[0_5px] shadow-desaturated-dark-blue(key-shadow) bg-desaturated-dark-blue text-white text-2xl active:[filter:contrast(130%)] active:[transform:scaleY(.95)_translateY(2.5%)]' character='RESET' handleClick={handleBtnClick} />
      <Button className='col-span-2 rounded-[5px] shadow-[0_5px] shadow-dark-red bg-red text-white active:[filter:contrast(130%)] active:[transform:scaleY(.95)_translateY(2.5%)]' character='=' handleClick={handleBtnClick} />
    </section>
  </>
}