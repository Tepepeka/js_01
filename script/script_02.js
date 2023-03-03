function sum(){
  const number = Number(prompt('Enter ur number!'))
  if (number === 1) {
    return `facto of ${number} = ${number}`
  } else {
    let sum = 1
    for (let i = 1; i < number + 1; i++)
    sum *= i
    return `facto of ${number} = ${sum}`
  }
}

console.log(sum())