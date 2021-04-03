class Person {
    constructor() {
        this.cards = []
    }

    getBestValue() {
        // calculate the best value
        let result = 0
        this.cards.forEach(card => {
            if (card === 1 && result + 11 <= 21) {
                result += 11
            }
            result += card
        })
        this.bestValue = result
        return result
    }

    addCard(card) {
        this.cards.push(card)
    }

    clearCards() {
        this.cards = []
    }
}

class Player extends Person {
    constructor(id) {
        super()
        this.id = id
        this.currentBet = 0
        this.token = 1000
    }

    bet(amount) {
        if (this.token > amount) {
            this.token -= amount
            this.currentBet += amount
        } else {
            console.log("error: not enough money")
        }
    }

    getBetAmount() {
        return this.currentBet
    }

    win() {
        this.token += (2 * this.currentBet)
        this.currentBet = 0
    }

    loss() {
        this.currentBet = 0
    }

    getId() {
        return this.id
    }
}

class Dealer extends Person {
    constructor() {
        super()
        this.token = 10000
    }

    loss(amount) {
        this.token -= amount
    }

    win(amount) {
        this.token += amount
    }
}

class Game {
    constructor() {
        this.players = []
        this.dealer = new Dealer()
        this.deck = []
    }

    addPlayer(player) {
        this.players.push(player)
    }

    setDeck(deck) {
        this.deck = deck
    }

    drawOneCard() {
        return this.deck.pop()
    }

    // distribute cards to all players and the dealer
    initialCards() {
        this.players.forEach(player => {
            player.addCard(this.drawOneCard())
            player.addCard(this.drawOneCard())
        })
        this.dealer.addCard(this.drawOneCard())
        this.dealer.addCard(this.drawOneCard())
    }

    compareResult() {
        const dealerBestValue = this.dealer.getBestValue()
        this.players.forEach(player => {
            const playerBestValue = player.getBestValue()
            // player win
            if (playerBestValue > dealerBestValue) {
                this.dealer.loss(player.getBetAmount())
                player.win()
            } else { // dealer win
                this.dealer.win(player.getBetAmount())
                player.loss()
            }
        })
    }

    getStatus() {
        this.players.forEach(player => {
            console.log(`Player: ${player.id}; Cards: ${player.cards}; Best Value: ${player.getBestValue()}; Current bets: ${player.getBetAmount()}; Total: ${player.token}`)
        })
        console.log(`Dealer Cards: ${this.dealer.cards}; Best Value: ${this.dealer.getBestValue()}; Total: ${this.dealer.token}`)
    }
}


const game = new Game()

const player1 = new Player(1)
const player2 = new Player(2)
const player3 = new Player(3)
game.addPlayer(player1)
game.addPlayer(player2)
game.addPlayer(player3)

game.setDeck([1,4,2,3,1,4,2,3,9,10])
game.initialCards()

player1.bet(10)
player2.bet(100)
player3.bet(500)

game.getStatus()

game.compareResult()
game.getStatus()


// Player: 1; Cards: 10,9; Best Value: 19; Current bets: 10; Total: 990
// Player: 2; Cards: 3,2; Best Value: 5; Current bets: 100; Total: 900
// Player: 3; Cards: 4,1; Best Value: 16; Current bets: 500; Total: 500
// Dealer Cards: 3,2; Best Value: 5; Total: 10000

// Player: 1; Cards: 10,9; Best Value: 19; Current bets: 0; Total: 1010
// Player: 2; Cards: 3,2; Best Value: 5; Current bets: 0; Total: 900
// Player: 3; Cards: 4,1; Best Value: 16; Current bets: 0; Total: 1500
// Dealer Cards: 3,2; Best Value: 5; Total: 9590