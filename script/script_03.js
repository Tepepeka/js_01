function pyramid() {
    const number = Number(prompt('Enter ur number!'))
    for (let i = 1; i < number + 1; i++)
    console.log(' '.repeat(number - i),"#".repeat(i))
}

pyramid()