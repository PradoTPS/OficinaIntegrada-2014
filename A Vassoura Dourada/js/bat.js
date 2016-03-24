function Bat(numberOfBat) {
	this.x = 800 + Math.floor(Math.random() * 100);
	this.y = 230;
	this.w = 70;
	this.h = 70;
	this.speed_x = 20;
	this.speed_y = 0;
	
	this.start = (new Date()).getTime();
	this.current;
	this.numFrames = 4;
	this.animation = new Array();
	this.deathAnimation = new Array();
	this.currentFrame = 0;
	this.currentFrame2 = 0;
	
	this.deltaTime = function() {
		this.current = (new Date()).getTime();
		this.elapsed = this.current - this.start;
		this.start = this.current;
		var delta = this.elapsed / 1000;
		return delta;
	}
	
	for (var i = 0; i < this.numFrames; i++) {
		this.animation[i] = new Image();
		this.animation[i].src = "IMAGEM/Jogo/Inimigos/Morcego" + numberOfBat + "/bat" + numberOfBat + "_" + (i + 1) + ".png";
	}
		
	for (var i = 0; i < this.numFrames; i++) {
		this.deathAnimation[i] = new Image();
		this.deathAnimation[i].src = "IMAGEM/Jogo/Inimigos/Morcego" + numberOfBat + "/morte/bat" + numberOfBat + "_morte" + (i + 1) + ".png";
	}
	
	this.animationUpdate = function() {
		var delta = this.deltaTime();
		this.currentFrame += delta * 8;
		this.currentFrame2 += delta * 10;
	}
	
	this.update = function() {
		if(runner.speedX == 0) {
			this.x -= this.speed_x;
			this.y -= this.speed_y;
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
				screen.morcego_audio.play();
				screen.cavalo_morreu_audio.play();
			}
			
			manager.deathToll++;
			localStorage.setItem("mortes", screen.deathToll);
		}
		
		this.animationUpdate();
	}
	
	this.draw = function() {
		if( this.speed_x == 20) {
			context.drawImage(this.animation[Math.floor(this.currentFrame) % this.numFrames], this.x, this.y, this.w, this.h);
		}
		
		if( this.speed_x < 20) {
			context.drawImage(this.deathAnimation[Math.floor(this.currentFrame2) % this.numFrames], this.x, this.y, this.w, this.h);
		}
	}
}