document.querySelector('.add').addEventListener('click', addition)
document.querySelector('.sub').addEventListener('click', subtract)
document.querySelector('.div').addEventListener('click', division)
document.querySelector('.mul').addEventListener('click', multiply)

function addition() {
  let input1 = document.querySelector('.n1').value
  let input2 = document.querySelector('.n2').value

  document.querySelector('h2').innerText = parseInt(input1) + parseInt(input2)
}

function subtract() {
  let input1 = document.querySelector('.n1').value
  let input2 = document.querySelector('.n2').value

  document.querySelector('h2').innerText = parseInt(input1) - parseInt(input2)
}

function division() {
  let input1 = document.querySelector('.n1').value
  let input2 = document.querySelector('.n2').value

  document.querySelector('h2').innerText = parseInt(input1) / parseInt(input2)
}

function multiply() {
  let input1 = document.querySelector('.n1').value
  let input2 = document.querySelector('.n2').value

  document.querySelector('h2').innerText = parseInt(input1) * parseInt(input2)
}
