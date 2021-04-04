class CoffeeMaker {
    makeCoffee(numMilk, numSugar) {
        let coffee = new PlainCoffee()
        for (let i = 0; i < numMilk; i++) {
            coffee = new WithMilk(coffee)
        }
        for (let i = 0; i < numSugar; i++) {
            coffee = new WithSugar(coffee)
        }
        return coffee
    }
}

class PlainCoffee {
    getCost() {
        return 2
    }

    getIngredient() {
        return "Plain Coffee"
    }
}

class WithMilk extends PlainCoffee {
    getCost() {
        super.getCost() + 0,5
    }

    getIngredient() {
        return super.getIngredient() + ", Milk"
    }
}

class WithSugar extends PlainCoffee {
    getCost() {
        super.getCost() + 0.5
    }

    getIngredient() {
        return super.getIngredient() + ", Sugar"
    }
}

let coffeeMaker = new CoffeeMaker()

const coffee = coffeeMaker.makeCoffee(2)
console.log(coffee.getIngredient())
