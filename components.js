

var loc = {
	name: "location",
	x: 0,
	y: 0,
	init: function(x, y) {
		this.x = x;
		this.y = y;
		return this;
	}
}

function squere(x, y, width, height){
	this.name = "squere";
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}

function displaySolid(s){
	this.name = "displaySolid";
	this.color = "#00A";
	this.squere = s;
	this.draw = function() {
		canvas.fillStyle = this.color;
		canvas.fillRect(this.squere.x, this.squere.y, this.squere.width, this.squere.height);
	}
}

function arrowMove(s) {
	this.name ="arrowMove";
	this.squere = s;
	this.update = function() {
		if (Key.isDown(Key.UP)) this.squere.y--;
		if (Key.isDown(Key.LEFT)) this.squere.x--;
		if (Key.isDown(Key.DOWN)) this.squere.y++;
		if (Key.isDown(Key.RIGHT)) this.squere	.x++;
	}
}