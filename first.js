document.addEventListener('DOMContentLoaded', () => {
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
 age: 56,
 insctription: false,
 hobbies: ['serie tv', 'gym'],
 address: {
   street: 'Rue machin 9',
   zip:6024,
   city: "Gosselies"
   }
   }
let template = `
<div>
 <p>Je m'appelle ${firstName} ${lastName}</p>
 <p>J'ai ${2025-birthYear} ans</p>
 <p>Mon hobbies: ${hobbies.join(' | ')}</p>
 <p>Mon conjoint s'appeller ${conjoint.firstName} ${conjoint.lastName} </p>
</div>
`
let sortie = document.querySelector('#sortie')
console.log(sortie)
sortie.innerHTML = template
})