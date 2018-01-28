class SnakePart extends BaseElement {
	constructor() {
		super(x, y, isVisiable){
			this.x = x 0;
			this.y = y || 0;
			this.isVisiable = isVisiable || true;
		}

	}
	direction(deWay) {
		this.direct = deWay.direct || 'right';
		return this.direct;
	}
	move(steps) {
		this.howMuchsteps = steps.howMuchsteps || 0;

		if (this.direct == 'right') {
			this.x = this.x + this.howMuchsteps
		}
		else if (this.direct == 'left') {
			this.x = this.x - this.howMuchsteps
		}
		else if (this.direct == 'up') {
			this.y = this.y - this.howMuchsteps
		}
		else {
			this.y = this.y + this.howMuchsteps
		}
	}
}

module.exports = SnakePart;
