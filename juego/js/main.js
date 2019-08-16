const skyblue = document.getElementById('skyblue')
const purple = document.getElementById('purple')
const orange = document.getElementById('orange')
const green = document.getElementById('green')
const btnStart = document.getElementById('btnStart')
const LAST_LEVEL = 10

class Game {
  constructor() {
    this.initialize = this.initialize.bind(this)
    this.initialize()
    this.generateSequence()
    setTimeout(this.nextLevel, 500)
  }

  initialize() {
    this.nextLevel = this.nextLevel.bind(this)
    this.chooseColor = this.chooseColor.bind(this)
    this.toggleBtnStart()
    this.level = 1
    this.colors = {
      skyblue,
      purple,
      orange,
      green
    }
  }

  toggleBtnStart() {
    if (btnStart.classList.contains('hide')) {
      btnStart.classList.remove('hide')
    } else {
      btnStart.classList.add('hide')
    }
  }
  generateSequence() {
    this.sequence = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
  }

  nextLevel() {
    this.sublevel = 0
    this.lightSequence()
    this.addClickEvents()
  }

  transformNumberToColor(n) {
    switch (n) {
      case 0:
        return 'skyblue'
      case 1:
        return 'purple'
      case 2:
        return 'orange'
      case 3:
        return 'green'
    }
  }

  transformColorToNumber(color) {
    switch (color) {
      case 'skyblue':
        return 0
      case 'purple':
        return 1
      case 'orange':
        return 2
      case 'green':
        return 3
    }
  }

  lightSequence() {
    for (let i = 0; i < this.level; i++) {
      const color = this.transformNumberToColor(this.sequence[i])
      setTimeout(() => this.lightColor(color), 1000 * i)
    }
  }

  lightColor(color) {
    this.colors[color].classList.add('light')
    setTimeout(() => this.turnOffColor(color), 350)
  }

  turnOffColor(color) {
    this.colors[color].classList.remove('light')
  }

  addClickEvents() {
    // El bind permite atar el this al juego
    // this.colors.skyblue.addEventListener('click', this.chooseColor.bind(this))

    this.colors.skyblue.addEventListener('click', this.chooseColor)
    this.colors.purple.addEventListener('click', this.chooseColor)
    this.colors.orange.addEventListener('click', this.chooseColor)
    this.colors.green.addEventListener('click', this.chooseColor)
  }

  deleteClickEvents() {
    this.colors.skyblue.removeEventListener('click', this.chooseColor)
    this.colors.purple.removeEventListener('click', this.chooseColor)
    this.colors.orange.removeEventListener('click', this.chooseColor)
    this.colors.green.removeEventListener('click', this.chooseColor)
  }

  chooseColor(ev) {
    const colorName = ev.target.dataset.color
    const colorNro = this.transformColorToNumber(colorName)

    this.lightColor(colorName)

    if (colorNro === this.sequence[this.sublevel]) {
      this.sublevel++
      if (this.sublevel === this.level) {
        this.level++
        this.deleteClickEvents()
        if (this.level === (LAST_LEVEL + 1)) {
          this.winnerGame()
        } else {
          setTimeout(this.nextLevel, 1500)
        }
      }
    } else {
      this.loseGame()
    }
  }

  winnerGame() {
    swal('Platzi', 'Felicitaciones, ganaste el juego!', 'success')
      .then(this.initialize)
  }

  loseGame() {
    swal('Platzi', 'Lo lamentamos, perdiste :(', 'error')
      .then(() => {
        this.deleteClickEvents()
        this.initialize()
      })
  }
}

function startGame() {
  window.game = new Game()
}