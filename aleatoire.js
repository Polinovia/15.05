//let randomNumber = Math.floor(Math.random() * 101); // Generates a number between 0 and 100
 // Display the result inside the <p> element with class "debug"
 //document.querySelector('.debug').innerHTML = `Random Number: ${randomNumber}`;

 const $debug = document.querySelector('.debug')
 const $userNb = document.querySelector('.userNb')
 const $replay = document.querySelector('.replay')
 const $userForm = document.querySelector('.userForm')
 const $notification =document.querySelector('.notification')
 const $histoire = document.querySelector('.history')
 const $historyListe = document.querySelector('.history-list')

 const nbAlea = Math.floor(Math.random() * 100) + 1
 $debug.innerText = nbAlea

 const displayNotif = (text, classe) => {
  let message = text
  $notification.innerText = message
  $notification.classList.remove('hidden')
  $notification.classList.add(classe)
  setTimeout (() => {
    $notification.classList.add('hidden')
    $notification.classList.remove(classe)
}, 2000)
$userForm.reset()

 }

 $userForm.addEventListener ('submit', e => {
  e.preventDefault()
  const userNb = parseInt ($userNb.value)
  if ( isNaN(userNb) || userNb < 1 || userNb > 100) {
    alert('Tapez un nombre entre 1 et 100')
    return
  } else {if (userNb < nbAlea) { 
    displayNotif("Trop bas", 'is-danger')}
    else if (userNb  > nbAlea) { 
      displayNotif("Trop gros", 'is-danger')}
    else {
      displayNotif("Gagne!!", 'is-success')
      $userNb.classList.add('hidden')
      $replay.classList.remove('hidden')
    }
       
     $histoire.classList.remove ('hidden')
     const template = `<li>${userNb}</li>`
     $historyListe.insertAdjacentHTML('beforeend', template)
    }
    })