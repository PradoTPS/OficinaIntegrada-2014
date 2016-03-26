function Fade(){
	this.fade = new Animation(25, "gameplay/fade/fade", 15, true);
	
	this.update = function() {
		if(Math.floor(this.fade.currentFrame) % this.fade.numFrames == 24 && screen.scene == "LEVEL1") {
			screen.scene = "LEVEL2";
			manager.winning = false;
			this.fade.currentFrame = 0;
			manager.nextLevel = true;
		}
		
		if(Math.floor(this.fade.currentFrame) % this.fade.numFrames == 24 && screen.scene == "LEVEL2") {
			screen.scene = "LEVEL3";
			manager.winning = false;
			this.fade.currentFrame = 0;
			manager.nextLevel = true;
		}
		
		if(Math.floor(this.fade.currentFrame) % this.fade.numFrames == 24 && screen.scene == "LEVEL3") {
			screen.scene = "MENU";
			manager.winning = false;
			this.fade.currentFrame = 0;
			manager.nextLevel = true;
		}
		this.fade.update();
	}
	
	this.draw = function(){
		switch(screen.scene){
			case "LEVEL1" || "LEVEL2":
				if(runner.x >= 840) {
					context.drawImage(this.fade.animation[Math.floor(this.fade.currentFrame) % this.fade.numFrames], 0, 0);
				}
				break;
			case "LEVEL3":
				if(screen.broom.y >= 0) {
					context.drawImage(this.fade.animation[Math.floor(this.fade.currentFrame) % this.fade.numFrames], 0, 0);
				}
				break;
		}
	}
}