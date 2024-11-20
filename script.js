
let raquete1 = document.getElementById('raquete1')
let raquete2 = document.getElementById('raquete2')
let quadrado = document.getElementById('container')

let posY1 = 135
let movimento = 10
let movimento2 = 10
let posY2 = 135
//BOLA
let veloX = 5
let veloY = 3
let bolaX = 650
let bolaY = 190
let bola = document.getElementById('bola');
let h1 = document.getElementById('h1')
let h2 = document.getElementById('h2')
let i = 0
let i2 = 0
let contador = 0
let p = document.getElementById('p')



document.addEventListener('keydown', (event) => {
    if (event.key === 'w') {
        posY1 -= movimento;
        if (posY1 < 10) {
            posY1 = 10;
        }
    }else if (event.key === 's') {
        posY1 += movimento;
        if (posY1 > 265) {;
            posY1 = 265;
        }
    }
    raquete1.style.top =posY1 + 'px'


})


document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        posY2 -= movimento2;
        if (posY2 < 10) {
            posY2 = 10;
        }
    }else if (event.key === 'ArrowDown') {
        posY2 += movimento2;
        if (posY2 > 265) {
            posY2 = 265;
        }
    }
    raquete2.style.top =posY2 + 'px'


})

function moverbola(){

    fases()


let h1 = document.getElementById('h1')
h1.innerText = i
  

  bolaY =  veloY + bolaY;
  bolaX = veloX + bolaX;
  
  if(bolaY <= 20 || bolaY >=395 ){
    veloY = -veloY
   
  }
   if(bolaX <= 330 || bolaX >= 1010){
    veloX = -veloX
    if(bolaX <= 330){
        i2++
        h2.innerText = i2
    }else{
        i++
        h1.innerText = i    
    }
   
  }

//raquetes
   if(bolaX + raquete2.offsetWidth >= raquete2.offsetLeft && bolaY + bola.offsetHeight >= posY2 && posY2 + raquete2.offsetHeight >= bolaY){
    veloX = -veloX
   }


   if(bolaX <= raquete1.offsetWidth + raquete1.offsetLeft && bolaY + bola.offsetHeight >= posY1 && posY1 + raquete1.offsetHeight >= bolaY){
    veloX = -veloX
   }

bola.style.top = bolaY + 'px';
bola.style.left = bolaX + 'px';



requestAnimationFrame(moverbola)
}



moverbola()

function fases(){
    if(i + i2 >= 10){
       movimento = 7
       movimento2 = 7
       p.innerText ='fase 2'

        
    }
    if(i + i2 >= 20){
        movimento = 5
        movimento2 = 5
        p.innerText = 'fase 3'
     }
    
    
}