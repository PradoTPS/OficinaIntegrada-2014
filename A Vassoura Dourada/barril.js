var Barril = function() {
	this.barril = new Image();
	this.barril.src = "IMAGEM/Jogo/Inimigos/barril.png";

	this.x = 1000 + Math.floor(Math.random() * 1000);
	this.y = 434;
	this.w = 48;
	this.h = 66;
	this.speed = 15;
	
	this.update = function() {
		if(runner.speed_x == 0) {
			this.x -= this.speed;
		}
		
		if (runner.colisao_x + runner.colisao_w >= this.x &&
			runner.colisao_x - runner.colisao_w + 30 < this.x + this.w &&
			runner.colisao_y + runner.colisao_h >= this.y &&
			runner.colisao_y - runner.colisao_h + 30 < this.y + this.h) {
					
			if(tela.scene == "FASE3"){
				tela.scene = "LOOSE";
			}
			
			if(tela.scene == "FASE1"){
				tela.scene = "LOOSE";
			}
			
			if(tela.scene == "FASE2"){
				tela.scene = "LOOSE";
			}
			
			if(tela.MUSICA) {
				tela.bateu_audio.play();
				tela.cavalo_morreu_audio.play();
			}
			
			tela.numMortes++;
			localStorage.setItem("mortes", tela.numMortes);
		}
	}
	
	this.draw = function() {
		/*context.fillStyle = "RED";
		context.fillRect(this.x, this.y, this.w, this.h);*/
		context.drawImage(this.barril, this.x, this.y, this.w, this.h);
	}
}