class Node {
    constructor(value) {
        this.value = value
    }
}


const copyValue = node => {
    return new Node(node.value)
}

// doesn't make sense in JS
const copyReference = node => {
    return node
}
