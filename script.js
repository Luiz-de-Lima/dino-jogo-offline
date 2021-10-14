const dino = document.querySelector('.dino')
const background = document.querySelector('.background')
let isJumping = false

let position = 0

function handleKeyUp(e) {
    if (e.keyCode === 32) {
        if (!isJumping) {
            Jump()
        }
    }
}

function Jump() {

    isJumping = true
    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval)
            let dowInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(dowInterval)
                    isJumping = false
                } else {
                    position -= 20
                    dino.style.bottom = position + 'px'
                }

            }, 20)

        } else {
            position += 20
            dino.style.bottom = position + 'px'
        }

    }, 20)
}

function CreateCactus() {
    const cactus = document.createElement('div')
    let cactusPosition = 1000
    let ramdomTime = Math.random() * 6000
    console.log(ramdomTime)

    cactus.classList.add('cactus')
    cactus.style.left = 1000 + 'px'
    background.appendChild(cactus)

    let leftInterval = setInterval(() => {
            cactusPosition -= 10
            cactus.style.left = cactusPosition + 'px'

            if (cactusPosition < -60) {
                clearInterval(leftInterval)
                background.removeChild(cactus)
            } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
                clearInterval(leftInterval)
                document.body.innerHTML = '<h1 class="game-over">Fim do Jogo</hi>'
            } else {
                cactusPosition -= 10
                cactus.style.left = cactusPosition + 'px'
            }
        },
        20)

    setTimeout(CreateCactus, ramdomTime)
}

function InicioGame() {
    Jump()
}
CreateCactus()
document.addEventListener('keyup', handleKeyUp)