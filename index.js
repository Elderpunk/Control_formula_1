// MOVER EL COCHE CON LOS CURSORES


// Averiguar el nombre que se le da a los cursores
document.addEventListener('keydown', evento => {
    console.log(evento.key)
})

// VARIABLES 
let x=0, y=0

// FUNCION para indicarle el movimiento a realizar y la distancia a recorrer
const coche = document.getElementById('coche'),
        up = () => coche.style.transform = `translate(${x}%, ${y -= 30}%)`
        down = () => coche.style.transform = `translate(${x}%, ${y += 30}%)`
        right = () => coche.style.transform = `translate(${x += 30}%, ${y}%)`
        left = () => coche.style.transform = `translate(${x -= 30}%, ${y}%)`


// Le indicamos que hacer segun la tecla que le indicamos
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

//SCROLL en este caso le indicamos a travez del eje Y
addEventListener('scroll', () => {
    console.log(Math.round(scrollY))
})

// Cuando hagamos scroll y llegemos a la zona indicada apareceran mensajes indicativos

//CONTROL 1
addEventListener('scroll', () => {
    if (scrollY >= 500 && scrollY <= 550) {
        const control1 = document.createElement('h1')
        control1.textContent = 'CONTROL 1'
        control1.style.fontSize = '3rem'
        control1.style.backgroundColor = 'black'
        control1.style.color = 'white'
        control1.style.border = '2px solid red'
        control1.style.padding ='10px'
        control1.style.position = 'absolute'
        control1.style.top = '700px'
        control1.style.left = '100px'
        document.body.appendChild(control1)
    }
})
// CONTROL 2
addEventListener('scroll', () => {
    if (scrollY >= 1000 && scrollY <= 1050) {
        const control2 = document.createElement('h1')
        control2.textContent = 'CONTROL 2'
        control2.style.fontSize = '3rem'
        control2.style.backgroundColor = 'black'
        control2.style.color = 'white'
        control2.style.border = '2px solid red'
        control2.style.padding ='10px'
        control2.style.position = 'absolute'
        control2.style.top = '1200px'
        control2.style.right = '100px'
        document.body.appendChild(control2)
    }
})
// META
addEventListener('scroll', () => {
    if (scrollY >= 1200 && scrollY <= 1250) {
        const meta = document.createElement('h1')
        meta.textContent = 'META'
        meta.style.fontSize = '5rem'
        meta.style.padding ='50px 150px 50px 150px '
        meta.style.backgroundColor = 'black'
        meta.style.color = 'white'
        meta.style.border = '3px dashed white'
        meta.style.position = 'absolute'
        meta.style.top = '1600px'
        meta.style.right = '410px'
        document.body.appendChild(meta)
    }
})