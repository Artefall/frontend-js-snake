class BaseElement {
	constructor(args) {
		this.x = args.x || 0
		this.y = args.y || 0
		this.isVisiable = args.isVisiable || true;
	}

}


module.exports = BaseElement;
