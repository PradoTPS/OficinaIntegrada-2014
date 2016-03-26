function Text(x, y, color, size, font){
	context.fillStyle = color;
	context.font = size + " " + font;
	
	this.draw = function(){
		context.fillText("Mortes: " + manager.deathToll, x, y);
	}
}