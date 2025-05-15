const vignettes = document.querySelectorAll('.vignette')
const $bigImg = document.querySelector('.big')
//console.log(vignettes)
vignettes.forEach (vignette => {
 vignette.addEventListener('click', event => {
    const cible = event.target
    console.log(cible.src)
    document.querySelector('.active').classList.remove('active')
    cible.classList.add('active')
    $bigImg.src = cible.src
    //removeClick(eventClick)
  },{once:true})
})

