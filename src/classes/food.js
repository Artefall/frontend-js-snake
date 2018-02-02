class Food extends BaseElement {
	constructor() {
		super(x, y, isVisiable)
		this.isVisiable = isVisiable || true;
	}
	feed() {
		this.isVisiable = false;
	}
}

module.exports = Food;
