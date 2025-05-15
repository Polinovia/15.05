document.addEventListener('DOMContentLoaded', () => {
const calculAge = (birthYear) => {
  const today = new Date()
  console.log(today)
 return today.getFullYear - birthYear
}


let lastName = 'Smith\'s'
let firstName = 'Pierre'
let birthYear = 1969
let insctription = true //false
lastName = 'Charlier'
const hobbies = new Array ('tennis','cinema')
hobbies.push('piscine')
let conjoint = {
 firstName: "Martine",
 lastName: "VG",
 birthYear: 1976,
 insctription: false,
 hobbies: ['serie tv', 'gym'],
 address: {
   street: 'Rue machin 9',
   zip:6024,
   city: "Gosselies"
   }
   }
   conjoint.permis = true
   
const template = `
<div>
 <p>Je m'appelle ${firstName} ${lastName}</p>
 <p>J'ai ${calculAge(birthYear)} ans</p>
 <p>Mon compagne a ${calculAge(conjoint.birthYear)} ans</p>
 <p>Mon hobbies: ${hobbies.join(' | ')}</p>
 <p>Mon conjoint s'appeller ${conjoint.firstName} ${conjoint.lastName} </p>
</div>
`
const $sortie = document.querySelector('#sortie')
console.log($sortie)
$sortie.insertAdjacentHTML('afterbegin', template)
const $ulHobbies = $sortie.querySelector('ul')
hobbies.forEach((hobby, index) => {
  const template = `<li>${hobby} avez l'index ${index}</li> `
  $ulHobbies.insertAdjacentHTML ('beforeend', template)
})
})