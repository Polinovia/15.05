const $vignettes = document.querySelector('#list-users')
const $bigImg = document.querySelector('.big')
console.log($vignettes)
 $vignettes.addEventListener ('click', event => {
    const cible = event.target
    event.preventDefault()
    if (cible.classList.contains('vignette')){
   // console.log(cible.src)
    $vignettes.querySelector('.active').classList.remove('active')
    cible.classList.add('active')
    $bigImg.src = cible.src
  }
})


