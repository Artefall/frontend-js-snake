class Food extends BaseElement {
	constructor() {
		super(x, y, isVisiable){
			this.x = x 0;
			this.y = y || 0;
			this.isVisiable = isVisiable || true;
		}

	}
	feed() {
		this.isVisiable = false;
	}
}

module.exports = Food;
