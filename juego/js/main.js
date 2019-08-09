const skyblue = document.getElementById('skyblue')
const purple = document.getElementById('purple')
const orange = document.getElementById('orange')
const green = document.getElementById('green')
const btnStart = document.getElementById('btnStart')

class Game {
  constructor() {
    this.initialize()
    this.generateSequence()
    this.nextLevel()
  }

  initialize() {
    this.chooseColor = this.chooseColor.bind(this)
    btnStart.classList.add('hide')
    this.level = 1
    this.colors = {
      skyblue,
      purple,
      orange,
      green
    }
  }

  generateSequence() {
    this.sequence = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
  }

  nextLevel() {
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

  chooseColor(ev) {
    console.log(this)
  }
}

function startGame() {
  window.game = new Game()
}