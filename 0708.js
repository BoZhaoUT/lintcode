const STATES = {
    UP: "UP",
    DOWN: "DOWN", 
    IDLE: "IDLE"
}

const DIRECTIONS = {
    UP: "UP",
    DOWN: "DOWN"
}

class Elevator {
    constructor(totalLevel) {
        this.totalLevel = totalLevel
        this.currLevel = 0
        this.upList = Array(totalLevel).fill(false)
        this.downList = Array(totalLevel).fill(false)
        this.state = STATES.IDLE
    }

    // requests(3, "DOWN") means someone from level 2 pressed "DOWN"
    request(level, direction) {

    }

    openGate() {

    }

    closeGate() {

    }

    elevatorStatusDescription() {
        console.log(`Currently elevator status is : ${this.state}.`)
        console.log(`Current level is at: ${this.currLevel}.`)
        console.log(`up stop list looks like: ${this.upList}.`)
        console.log(`down stop list looks like: ${this.downList}.`)
    }
}