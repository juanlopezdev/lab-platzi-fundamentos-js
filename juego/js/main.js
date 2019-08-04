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
    btnStart.classList.add('hide')
    this.nivel = 1
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
    for (let i = 0; i < this.nivel; i++) {
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
}

function startGame() {
  window.game = new Game()
}