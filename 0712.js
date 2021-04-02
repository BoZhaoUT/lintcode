const DRINKS = {
    Coke: "Coke",
    Sprite: "Sprite",
    MountainDew: "MountainDew"
}

const STATES = {
    NoSelection: "NoSelection",
    HasSelection: "HasSelection",
    InsertedMoney: "InsertedMoney"
}

class VendingMachine {
    constructor() {
        // one of ["NoSelection", "HasSelection", "InsertedMoney"]
        this.state = "NoSelection" 
        // one of DRINKS
        this.selection = null
        this.insertedMoney = 0
    }

    select(drink) {
        if (!DRINKS[drink]) {
            console.error("Invalid selection of drink.")
        }
        this.selection = drink
        this.state = STATES.HasSelection
    }

    insert(amount) {
        if (amount > 0) {
            this.insertedMoney += amount
            this.state === this.state === STATES.HasSelection ? STATES.HasSelection : STATES.InsertedMoney
        }
    }

    execTrans() {
        let cost
        switch (this.selection) {
            case DRINKS.Coke:
                cost = 100
                break
            case DRINKS.Sprite:
                cost = 150
                break
            case DRINKS.MountainDew:
                cost = 200
        }
        if (cost > this.insertedMoney) {
            console.log("Insufficien Funds")
        } else {
            const change = this.insertedMoney - cost
            this.insertedMoney = 0
            const drink = this.selection
            this.selection = null
            console.log(`Drink: ${drink}, Change: ${change}`)
        }
    }

    print() {
        return `Current Selection: ${this.selection}, Current Inserted Money: ${this.insertedMoney}, Current State is: ${this.insertedMoney}`
    }
}

const vendingMachine = new VendingMachine()
vendingMachine.select("Pepsi") // Invalid selection of drink.

vendingMachine.select("Sprite")
vendingMachine.insert(90)

vendingMachine.execTrans() // Insufficien Funds

vendingMachine.insert(200)
vendingMachine.execTrans()