// Connects "Enter" button to the "comparison" function
document.getElementById('button').addEventListener('click', comparison)
let age = 0

function comparison () {
  // get user input and convert to an integer
  age = document.getElementById('input').value
  age = parseInt(age)

  // check if age is 17 or over, 13 or over, and 5 or over
  if (age >= 17) {
    document.getElementById('answer').innerHTML = 'You can see a R movie alone.'
  } else if (age >= 13) {
    document.getElementById('answer').innerHTML = 'You can see a PG-13 movie alone.'
  } else if (age >= 5) {
    document.getElementById('answer').innerHTML = 'You can see a G or PG movie alone.'
  } else {
    document.getElementById('answer').innerHTML = 'Uh. You are too young for most things.'
  }
}
