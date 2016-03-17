﻿'use strict';

var BaseElement = require('../../src/js/base.element.js');

describe('Base Element', function () {
	describe('interface has a', function () {
		var element = new BaseElement();
		it('property "x"', function(){
			expect(element.x).toBeDefined();
		});
		it('property "y"', function(){
			expect(element.y).toBeDefined();
		});
		it('property "isVisible"', function(){
			expect(element.isVisible).toBeDefined();
		});
	});

	it('property "isVisible" is `true` by default', function () {
		var element = new BaseElement();
		expect(element.isVisible).toBe(true);
	});

	it('has {x:0, y:0} coordinates by default', function () {
		var element = new BaseElement();
		expect(element.x).toBe(0);
		expect(element.y).toBe(0);
	});
	
	describe('config argument correctly affects a', function () {
		var config = {
			x: 774,
			y: 88,
			isVisible: false
		}
		var element = new BaseElement(config);
		it('property "x"', function(){
			expect(element.x).toEqual(config.x);
		});
		it('property "y"', function(){
			expect(element.y).toEqual(config.y);
		});
		it('property "isVisible"', function(){
			expect(element.isVisible).toEqual(config.isVisible);
		});
	});
});

