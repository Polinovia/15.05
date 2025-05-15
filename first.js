window.onload = function () {
let lastName = 'Smith\'s'
let firstName = 'Pierre'
let birthYear = 1969
let insctription = true //false
lastName = 'Charlier'
let hobbies = new Array ('tennis','cinema')
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
 <p>Mon hobbies: ${hobbies}</p>
 <p>Mon conjoint s'appeller ${conjoint.firstName} ${conjoint.lastName} </p>
</div>
`
let sortie = document.querySelector('#sortie')
console.log(sortie)
sortie.innerHTML = template
}