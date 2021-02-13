//MOVER COCHE SOBRE CARRETERA

// 1-Saber que nombre tiene mis cursores
document.addEventListener('keydown',evento=>{
    console.log(evento.key)
})

// Variables 
let x=0,y=0
//Funciones
const coche = document.getElementById('coche'),
up =() => coche.style.transfrom = 'translate(${x},${y -=10}%)'
down =() => coche.style.transfrom = 'translate(${x},${y +=10}%)'
right =() => coche.style.transfrom = 'translate(${x +=10}%,${y})'
left =() => coche.style.transfrom = 'translate(${x -=10}%,${y})'

document.addEventListener('keyup',evento => {
    switch(evento.key) {
        case 'ArrowUp':
            up()
            break
            case 'ArrowDown':
            down()
            break
            case 'ArrowRight':
            rigt()
            break
            case 'ArrowLeft':
            left()
            break
    }
})