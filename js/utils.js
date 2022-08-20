export function notNumber(value){
  return isNaN(value) || value == ""
}

export function categoryIMC(result){
  result = Number(result)

  if (result < 18.5) {
    return "Abaixo do peso"
  } else if (result < 24.9){
    return "Peso Normal"
  } else if (result < 29.9){
    return "Sobrepeso"
  } else {
    return "Obesidade"
  }
}

export function calculateIMC(weight, height){
  return (weight / ((height / 100) ** 2)).toFixed(2)
}