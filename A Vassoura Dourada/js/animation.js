function Animation(numFrames, imageSrc, speed, fade){
	this.start = (new Date()).getTime();
	this.current;
	this.currentFrame = 0;
	this.animation = new Array();
	this.numFrames = numFrames;

	this.deltaTime = function() {
		this.current = (new Date()).getTime();
		this.elapsed = this.current - this.start;
		this.start = this.current;
		var delta = this.elapsed / 1000;
		return delta;
	}
	
	for (var i = 0; i < numFrames; i++) {
		this.animation[i] = new Image();
		this.animation[i].src = "images/" + imageSrc + (i + 1) + ".png";
	}
	
	this.update = function() {
		var delta = this.deltaTime();
		if(fade){
			if((screen.scene == "LEVEL1" || screen.scene == "LEVEL2") && runner.x >= 840) {
				this.currentFrame += delta * speed;
			}else if(screen.scene == "LEVEL3" && screen.broom.y >= 0) {
				this.currentFrame += delta * speed;
			}
		} else {
			this.currentFrame += delta * speed;
		}
	}
}