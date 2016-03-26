function Broom(){
	this.y = -600;
	this.animation = new Animation(15, "gameplay/broom/broom", 10, false);
	
	this.update = function() {
		if (runner.x >= 337 && screen.scene == "LEVEL3") {
			this.y += 10;
		}
				
		if(this.y >= 0) {
			this.y = 0;
		}
				
		if(screen.scene == "MENU") {
			this.y = -600;
		}
		
		this.animation.update();
	}
	
	this.draw = function(){
		if (manager.winning) {
			context.drawImage(this.animation.animation[Math.floor(this.animation.currentFrame) % this.animation.numFrames], 0, this.y);
		}
	}
}