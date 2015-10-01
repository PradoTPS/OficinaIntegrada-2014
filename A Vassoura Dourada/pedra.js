var Pedra = function() {
	this.pedra = new Image();
	this.pedra.src = "IMAGEM/Jogo/Inimigos/pedra.png";

	this.x = 1000 + Math.floor(Math.random() * 1000);
	this.y = 432;
	this.w = 80;
	this.h = 68;
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
		context.drawImage(this.pedra, this.x, this.y, this.w, this.h);
	}
}