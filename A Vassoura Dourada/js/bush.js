function Bush() {
	this.bush = new Image();
	this.bush.src = "IMAGEM/Jogo/Inimigos/arbusto.png";

	this.x = 1000 + Math.floor(Math.random() * 1000);
	this.y = 430;
	this.w = 92;
	this.h = 86;
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
				screen.bateu_audio.play();
				screen.cavalo_morreu_audio.play();
			}
			
			manager.deathToll++;
			localStorage.setItem("mortes", screen.deathToll);
		}
	}
	
	this.draw = function() {
		context.drawImage(this.bush, this.x, this.y, this.w, this.h);
	}
}