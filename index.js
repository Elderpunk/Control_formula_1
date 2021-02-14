// MOVER EL COCHE CON LOS CURSORES


// Averiguar el nombre que se le da a los cursores
document.addEventListener('keydown', evento => {
    console.log(evento.key)
})

// VARIABLES / FUNCIONES
let x=0, y=0
const coche = document.getElementById('coche'),
        up = () => coche.style.transform = `translate(${x}%, ${y -= 30}%)`
        down = () => coche.style.transform = `translate(${x}%, ${y += 30}%)`
        right = () => coche.style.transform = `translate(${x += 30}%, ${y}%)`
        left = () => coche.style.transform = `translate(${x -= 30}%, ${y}%)`


// mover pelotita
document.addEventListener('keyup', evento => {
    switch (evento.key) {
        case 'ArrowUp':
            up()
            break
        case 'ArrowDown':
            down()
            break
        case 'ArrowRight':
            right()
            break
        case 'ArrowLeft':
            left()
            break
    }
})