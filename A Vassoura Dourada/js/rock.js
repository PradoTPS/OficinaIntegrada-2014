function Rock() {
	this.rock = new Image();
	this.rock.src = "images/gameplay/enemies/rock.png";

	this.x = 1000 + Math.floor(Math.random() * 1000);
	this.y = 432;
	this.w = 80;
	this.h = 68;
	this.speed = 15;
	
	this.update = function() {
		if(runner.speedX == 0) {
			this.x -= this.speed;
		}
		
		if (runner.colliderX + runner.colliderW >= this.x &&
			runner.colliderX - runner.colliderW + 30 < this.x + this.w &&
			runner.colliderY + runner.colliderH >= this.y &&
			runner.colliderY - runner.colliderH + 30 < this.y + this.h) {
			
			if(screen.scene == "LEVEL1" || screen.scene == "LEVEL2" || screen.scene == "LEVEL3"){
				screen.scene = "LOSS";
			}
			
			if(manager.soundOn) {
				runner.diedContactAudio.play();
				runner.diedHorseAudio.play();
			}
			
			manager.deathToll++;
			localStorage.setItem("mortes", manager.deathToll);
		}
	}
	
	this.draw = function() {
		context.drawImage(this.rock, this.x, this.y, this.w, this.h);
	}
}