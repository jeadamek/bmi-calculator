import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateIMC, categoryIMC, notNumber } from './utils.js'

// variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


form.onsubmit = (event) => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)
  
  if (weightOrHeightIsNotANumber){
    AlertError.open() 
    return;
  } 

  AlertError.close()

  const result = calculateIMC(weight, height)
  const category = categoryIMC(result)

  displayResultMessage(result, category)
}

function displayResultMessage(result, category){
  const message = `Seu IMC é de ${result}</br><span>${category}</span>`
  
  Modal.message.innerHTML = message
  Modal.open()
}


inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()