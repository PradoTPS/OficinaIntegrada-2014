function Bat(numberOfBat) {
	this.x = 800 + Math.floor(Math.random() * 100);
	this.y = 230;
	this.w = 70;
	this.h = 70;
	this.speedX = 20;
	this.speedY = 0;
	
	this.start = (new Date()).getTime();
	this.current;
	this.numFrames = 4;
	this.animation = new Array();
	this.deathAnimation = new Array();
	this.currentFrame = 0;
	this.currentFrame2 = 0;
	this.flying = new Animation(4, "gameplay/enemies/bat" + numberOfBat + "/flying", 8, false);
	this.dying = new Animation(4, "gameplay/enemies/bat" + numberOfBat + "/dying/dying", 10, false);
	
	this.die = function(){
		this.speedX = -20;
		this.speedY = 15;
	}
	
	this.animationUpdate = function() {
		this.flying.update();
		this.dying.update();
	}
	
	this.update = function() {
		if(runner.speedX == 0) {
			this.x -= this.speedX;
			this.y -= this.speedY;
		}
		
		if (runner.colliderX + runner.colliderW - 40 >= this.x &&
			runner.colliderX - runner.colliderW < this.x + this.w &&
			runner.colliderY + runner.colliderH - 40>= this.y &&
			runner.colliderY - runner.colliderH < this.y + this.h &&
			runner.colliderY - runner.colliderH <= this.y - this.h) {
			
			if(screen.scene == "LEVEL2" || screen.scene == "LEVEL3"){
				screen.scene = "LOSS";
			}
				
			if(manager.soundOn) {
				runner.diedBatAudio.play();
				runner.diedHorseAudio.play();
			}
			
			manager.deathToll++;
			localStorage.setItem("mortes", manager.deathToll);
		}
		
		this.animationUpdate();
	}
	
	this.draw = function() {
		if( this.speedX == 20) {
			context.drawImage(this.flying.animation[Math.floor(this.flying.currentFrame) % this.flying.numFrames], this.x, this.y, this.w, this.h);
		}
		
		if( this.speedX < 20) {
			context.drawImage(this.dying.animation[Math.floor(this.dying.currentFrame) % this.dying.numFrames], this.x, this.y, this.w, this.h);
		}
	}
}