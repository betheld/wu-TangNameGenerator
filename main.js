let firstName = ['Gang','Original','Heavy','Lil','Big','Da','Killah','Tru','Young','Sun']
let lastName = ['Genius','Vulture','Master','Razah','King','Murdah','Street','Ninja','Mobb','Nasty']

document.querySelector('button').addEventListener('click', generate)
//we declare the input for the function in order to retrieve the value from the answer that is chosen 
function generate(){
  // by adding whats on the left of the equal sign we create a variable 
  let snack = document.getElementById('snack').value 
  let color = document.getElementById('color').value 
  let car = document.getElementById('car').value
  let drip = document.getElementById('drip').value
  let line = document.getElementById('line').value
// create variable named firstNameIndex and assign it the value of the combined inputs

//we then add a Number function to convert our string input to a number from the index 
// ex: Number ('1') = 1 
let firstNameIndex = Number(snack) + Number(color) + Number(car) + Number(drip) + Number(line) 
//create a varible for last name index with the same outputs
let lastNameIndex = Number(snack) + Number(color) + Number(car) + Number(drip) + Number(line) 
 console.log(firstName[firstNameIndex]+lastName[lastNameIndex])

document.querySelector('.wuTangName').innerHTML = firstName[firstNameIndex]+ ' ' +lastName[lastNameIndex]

}