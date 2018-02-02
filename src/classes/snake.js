class Snake {
	constructor(args) {
		this.parts = args.parts[this.head]
		this.head = args.head
		this.length = this.parts.length
		this.direction = args.direction
	}
	eat(args) {
		this.length = this.lenght.push(new SnakePart());
	}

	move(steps) {

	}

}

module.exports = Snake;
