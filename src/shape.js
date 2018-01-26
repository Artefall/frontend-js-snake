class Shape {
	constructor(settings = {}) {
		this.color = settings.color;
		this.top = settings.top || 0;
		this.left = settings.left || 0;
		this.element = document.createElement('div')
		this.element.style.left = this.left + "px"
		this.element.style.top = this.top + "px"
		this.element.style.backgroundColor = this.color
		document.body.appendChild(this.element)

	}
	move(top, left) {
		this.top = top;
		this.left = left;
	}

	update() {

	}
}

class Circle extends Shape {

}

class Rectangle extends Shape {
	constructor() {

	}
}

new Shape()
