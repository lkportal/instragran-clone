const imgAlternate = document.getElementById('imgAlter')
const imgs= ['../assets/screenshot1.png','../assets/screenshot2.png','../assets/screenshot3.png','../assets/screenshot4.png',]
let index = 0

const timeUp = setInterval(() => {
  imgAlternate.setAttribute('src',imgs[index])
  index = (index + 1) % imgs.length
  
},5000)

   