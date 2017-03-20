function Point(x, y){
  this.x = x
  this.y = y
}

Point.prototype.toString = function() {
  return("(" + this.x + ", " + this.y + ")")
}

function Side(length) {
  this.length = length
}

function Shape() {}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y)
}

Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y)
}

//Define a Circle object that inherits from Shape and is constructed with an integer argument that sets the radius property. Define and implement functions on Circle to calculate area() and circumference() based on the radius.
function Circle(radius) {
  Shape.call(this)
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.area = function() {
  return (Math.PI * this.radius^2)
}
Circle.prototype.circumference = function() {
  return (2 * Math.PI * this.radius)
}
Circle.prototype.diameter = function() {
  return (2 * this.radius)
}
Circle.prototype.radius = function() {
  return (this.radius)
}

//Define a Polygon object that inherits from Shape. It should be constructed with an array of Side objects that have a length property. Polygon should have a property called sides that holds the array of Side objects. Implement a function called perimeter() that calculates the perimeter of any Polygon based on the lengths of the sides. Implement a function called numberOfSides() that returns the number of sides.

function Polygon(sides) {
  Shape.call(this)
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon

Polygon.prototype.perimeter = function() {
  return this.sides.reduce(function(acc, side){
	   return side.length + acc
  },0)
}

Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}

//Define a Quadrilateral object that inherits from Polygon and is constructed with four integer arguments representing the side lengths.

function Quadrilateral(a, b, c, d) {
  Polygon.call(this, [new Side(a), new Side(b), new Side(c), new Side(d)])
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;


// Define a Rectangle object that inherits from Quadrilateral and is constructed with two integer arguments that set width and height properties. Implement an area() function to calculate the area.
function Rectangle(width, height){
  Quadrilateral.call(this, width, height, width, height)
  this.width = width
  this.height = height
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.area = function() {
  return this.width * this.height
}

// Define and implement a function for Square called listProperties() that returns a string containing only the properties that belong to Square. It should not list the constructor, area, perimeter, and other things inherited from the prototype chain.

function Square(side) {
  Rectangle.call(this, side, side)
  this.side = side
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square

Square.prototype.listProperties = function() {
  var props = "";
   for (var prop in this) {
     if(this.hasOwnProperty(prop)) {
       props += "this." + prop + " = " + this[prop] + "\n";
     }
   }
}

// Define a Triangle object that inherits from Polygon and is constructed with three integer arguments representing the side lengths.
function Triangle(side1, side2, side3) {
  Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3)])
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle
