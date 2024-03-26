console.log(document.title);

// EJERCICIO 1
let generasion1Pokimon = document.getElementById("gen-1")
generasion1Pokimon.innerText = 'Generasión 1 Pokimon'

// EJERCICIO 2
let backgroundColor = document.querySelector('.infocard-list')
backgroundColor.style.backgroundColor = '#0097fd'


// EJERCICIO 3
console.log(document.URL)

// EJERCICIO 4
console.log(document.domain)

// EJERCICIO 5
console.log(document.querySelectorAll('.img-fixed'))

// EJERCICIO 6
let images = document.querySelectorAll('img')
for (let i = 0; i < images.length; i++ ){
  images[i].src = 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif'
}




// EJERCICIO EXTRA

