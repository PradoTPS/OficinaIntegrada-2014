var Morcego = function() {
	this.x = 800 + Math.floor(Math.random() * 100);
	this.y = 230;
	this.w = 70;
	this.h = 70;
	this.speed_x = 20;
	this.speed_y = 0;
	
	this.start = (new Date()).getTime();
	this.current;
	this.numFrames = 4;
	this.animacao = new Array();
	this.animacao_morrendo = new Array();
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
		this.animacao[i] = new Image();
		this.animacao[i].src = "IMAGEM/Jogo/Inimigos/Morcego/bat1_" + (i + 1) + ".png";
	}
		
	for (var i = 0; i < this.numFrames; i++) {
		this.animacao_morrendo[i] = new Image();
		this.animacao_morrendo[i].src = "IMAGEM/Jogo/Inimigos/Morcego/morte/bat1_morte" + (i + 1) + ".png";
	}
	
	this.update_animacao = function() {
		var delta = this.deltaTime();
		this.currentFrame += delta * 8;
		
		this.currentFrame2 += delta * 10;
	}
	
	this.update = function() {
		if(runner.speed_x == 0) {
			this.x -= this.speed_x;
			this.y -= this.speed_y;
		}
		
		if (runner.colisao_x + runner.colisao_w - 40 >= this.x &&
			runner.colisao_x - runner.colisao_w < this.x + this.w &&
			runner.colisao_y + runner.colisao_h - 40>= this.y &&
			runner.colisao_y - runner.colisao_h < this.y + this.h &&
			runner.colisao_y - runner.colisao_h <= this.y - this.h) {
			
			if(tela.scene == "FASE3"){
				tela.scene = "LOOSE";
				//lua_x = 400;
			}
			
			if(tela.scene == "FASE2"){
				tela.scene = "LOOSE";
				//lua_x = 400;
			}
				
			if(tela.MUSICA) {
				tela.morcego_audio.play();
				tela.cavalo_morreu_audio.play();
			}
			
			tela.numMortes++;
			localStorage.setItem("mortes", tela.numMortes);
		}
		
		this.update_animacao();
	}
	
	this.draw = function() {
		/*context.fillStyle = "YELLOW";
		context.fillRect(this.positionX, this.positionY, this.w, this.h);*/
		
		if( this.speed_x == 20) {
			context.drawImage(this.animacao[Math.floor(this.currentFrame) % this.numFrames], this.x, this.y, this.w, this.h);
		}
		
		if( this.speed_x < 20) {
			context.drawImage(this.animacao_morrendo[Math.floor(this.currentFrame2) % this.numFrames], this.x, this.y, this.w, this.h);
		}
	}
}