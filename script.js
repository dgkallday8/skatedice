let stanceCube = document.querySelector('#stance')
let degreesCube = document.querySelector('#degrees')
let spinCube = document.querySelector('#spin')
let flipCube = document.querySelector('#flip')
let cubes = [stanceCube, degreesCube, spinCube, flipCube]

let modalWindow = document.querySelector('#modalWindow')
let result = document.querySelector('#result')

let startBtn = document.querySelector('.start')
let resetBtn = document.querySelector('.reset')
let rulesBtn = document.querySelector('.rules')
let closeModalBtn = document.querySelector('#closeModal')
closeModalBtn.addEventListener('click', () => {
    modalWindow.style.display = 'none'
})
rulesBtn.addEventListener('click', () => {
    modalWindow.style.display = 'block'
})

let counter = 1800

let diceStance = ['REGULAR', 'NOLLIE', 'FAKIE', 'SWITCH', 'X', 'SKATE\nDICE'];
let diceDegrees = ['180', '360', '180', '360', 'X', 'SKATE\nDICE'];
let diceSpin = ['BACKSIDE', 'FRONTSIDE', 'BACKSIDE', 'FRONTSIDE', 'X', 'SKATE\nDICE'];
let diceFlip = ['KICKFLIP', 'HEELFLIP', 'SHOVE-IT', 'X', 'X', 'SKATE\nDICE'];

let arrayWithValues = [diceStance, diceDegrees, diceSpin, diceFlip]

startBtn.addEventListener('click', () => {
    result.textContent = ' '
    for (let cube of cubes) {
        let randomSec = Math.random() * 3.3 + 1

        cube.style.transform = `rotate(${counter}deg)`
        cube.style.transition = `all ${randomSec}s`
        cube.style.background = 'red'
        cube.style.color = 'red'
        setTimeout(() => {
            cube.style.opacity = '1'
            cube.style.color = 'black'
        }, 1500)
    }
    counter += 1800
    getTrick()
    startBtn.setAttribute('disabled', 'true')
    setTimeout(() => {startBtn.removeAttribute('disabled')}, 3000)
})

function getTrick() {
    let randStance = diceStance[Math.floor(Math.random() * diceStance.length)]
    let randDegrees = diceDegrees[Math.floor(Math.random() * diceDegrees.length)]
    let randSpin = diceSpin[Math.floor(Math.random() * diceSpin.length)]
    let randFlip = diceFlip[Math.floor(Math.random() * diceFlip.length)]
    let tricks = [randStance, randDegrees, randSpin, randFlip]
    setTimeout(() => stanceCube.firstChild.textContent = randStance, 1500)
    setTimeout(() => degreesCube.firstChild.textContent = randDegrees, 1500)
    setTimeout(() => spinCube.firstChild.textContent = randSpin, 1500)
    setTimeout(() => flipCube.firstChild.textContent = randFlip, 1500)

    for (let letter of tricks) {
        if (letter !== 'X' && letter !== 'SKATE\nDICE') {
            let someDiv = document.createElement('div').textContent = letter + ' '
            setTimeout(() => result.append(someDiv), 3000)
        }
    }
}
resetBtn.onclick = () => location.reload()