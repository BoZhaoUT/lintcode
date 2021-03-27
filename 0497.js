class ShapeFactory {
    getShape(shape) {
        switch (shape) {
            case "Square":
                return new Square()
            case "Triangle":
                return new Triangle()
            case "Rectangle":
                return new Rectangle()
        }
    }
}

class Shape {}

class Rectangle extends Shape {
    draw() {
        console.log(" ---- ")
        console.log("|    |")
        console.log("|    |")
        console.log(" ---- ")
    }
}

class Triangle extends Shape {
    draw() {
        console.log("   /\\ ")
        console.log("  /  \\ ")
        console.log(" /____\\")
    }
}

class Square extends Rectangle {
    draw() {
        console.log(" ---- ")
        console.log("|    |")
        console.log(" ---- ")
    }
}

const shapeFactor = new ShapeFactory()

const square = shapeFactor.getShape("Square")
square.draw()

const rectangle = shapeFactor.getShape("Rectangle")
rectangle.draw()

const triangle = shapeFactor.getShape("Triangle")
triangle.draw()
