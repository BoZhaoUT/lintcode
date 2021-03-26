class Singleton {
    instance = ["a"]

    getInstance() {
        return this.instance
    }
}

const singleton = new Singleton()

const first = singleton.getInstance()
const second = singleton.getInstance()
console.log("first", first)
console.log("second", second)
first[0] = "b"
console.log("first", first)
console.log("second", second)