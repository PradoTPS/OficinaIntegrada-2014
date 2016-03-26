function Barrel() {
	this.barrel = new Image();
	this.barrel.src = "images/gameplay/enemies/barrel.png";

	this.x = 1000 + Math.floor(Math.random() * 1000);
	this.y = 434;
	this.w = 48;
	this.h = 66;
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
		context.drawImage(this.barrel, this.x, this.y, this.w, this.h);
	}
}