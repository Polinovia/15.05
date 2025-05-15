//let randomNumber = Math.floor(Math.random() * 101); // Generates a number between 0 and 100
 // Display the result inside the <p> element with class "debug"
 //document.querySelector('.debug').innerHTML = `Random Number: ${randomNumber}`;

 const $debug = document.querySelector('.debug')
 const $userNb = document.querySelector('.userNb')
 const $userForm = document.querySelector('.userForm')
 const $notification =document.querySelector('.notification')

 const nbAlea = Math.floor(Math.random() * 100) + 1
 $debug.innerText = nbAlea

 const displayNotif = (text, classe) => {
  let message = text
  $notification.innerText = message
  $notification.classList.remove('hidden')
  $notification.classList.add(classe)
  setTimeout (() => {
    $notification.classList.remove('hidden')
    $notification.classList.add(classe)
}, 2000)
 }

 $userForm.addEventListener ('submit', e => {
  e.preventDefault()
  const userNb = parseInt ($userNb.value)
  if ( isNaN(userNb) || userNb < 1 || userNb > 100) {
    alert('Tapez un nombre entre 1 et 100')
    return
  } else if (userNb < nbAlea) { 
    displayNotif("Trop bas", 'is-danger')}
    else if (userNb  > nbAlea) { 
      displayNotif("Trop gros", 'is-danger')}
    else {
      displayNotif("Gagne!!", 'is-success')}
    })