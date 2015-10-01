var Runner = function() {
	this.x = -120;
	this.y = 375;
	this.w = 126;
	this.h = 126;
	this.weight = 12;
	this.speed_x = 8;
	this.speed_y = 12;
	this.espadada_w = 114;
	this.espadada_h = 132;
	this.colisao_x = 133;
	this.colisao_y = 385;
	this.colisao_w = 84;
	this.colisao_h = 116;
	
	this.moveup = false;
	this.moveup1 = false;
	this.pulo_case = true;
	this.pulo_case2 = true;
	this.espadada = false;
	
	this.subindo = new Image();
	this.subindo.src = "IMAGEM/Jogo/Pedro/Pulo/pulo1.png";
	
	this.descendo = new Image();
	this.descendo.src = "IMAGEM/Jogo/Pedro/Pulo/pulo2.png";
	
	this.ganhou = new Image();
	this.ganhou.src = "IMAGEM/JOGO/Pedro/Ganhou/pedro_ganhou.png";
	
	this.start = (new Date()).getTime();
	this.current;
	this.currentFrame = 0;
	this.currentFrame2 = 0;
	
	this.animacao = new Array();
	this.numFrames = 4;
	this.velocidade_cavalo = 7;
	this.espadada_subindo = new Array();
	this.espadada_descendo = new Array();
	this.numFrames_espadada = 3;
	
		for (var i = 0; i < this.numFrames; i++) {
			this.animacao[i] = new Image();
			this.animacao[i].src = "IMAGEM/Jogo/Pedro/Andando/pedro" + (i + 1) + ".png";
		}
	
		for (var i = 0; i < this.numFrames_espadada; i++) {
			this.espadada_subindo[i] = new Image();
			this.espadada_subindo[i].src = "IMAGEM/Jogo/Pedro/Espadada_Subindo/pedro1_esp" + (i + 1) + ".png";
		}
	
		for (var i = 0; i < this.numFrames_espadada; i++) {
			this.espadada_descendo[i] = new Image();
			this.espadada_descendo[i].src = "IMAGEM/Jogo/Pedro/Espadada_Descendo/pedro2_esp" + (i + 1) + ".png";
		}

	this.deltaTime = function() {
		this.current = (new Date()).getTime();
		this.elapsed = this.current - this.start;
		this.start = this.current;
		var delta = this.elapsed / 1000;
		return delta;
	}
	
	this.bateu_audio = new Audio();
	this.bateu_audio.src = "AUDIO/Jogo/Morreu/bateu.mp3";
		
	this.cavalo_morreu_audio = new Audio();
	this.cavalo_morreu_audio.src = "AUDIO/Jogo/Morreu/Cavalo_morreu.wav";
		
	this.cavalo_audio = new Audio();
	this.cavalo_audio.src = "AUDIO/Jogo/Cavalo/Cavalo_Som.mp3";
		
	this.espadada_erro_audio = new Audio();
	this.espadada_erro_audio.src = "AUDIO/Jogo/Espadada/espada_erro.mp3";
		
	this.espadada_audio = new Audio();
	this.espadada_audio.src = "AUDIO/Jogo/Espadada/espadada.mp3";
		
	this.cavalo_pulo_audio = new Audio();
	this.cavalo_pulo_audio.src = "AUDIO/Jogo/Cavalo/pulo_cavalo.mp3";
		
		this.pulo = function() {
			if (this.y + this.h >= 496) {
				this.moveup = true;
				this.moveup1 = true;
			}
		}
		
		this.update_animacao = function() {
			var delta = this.deltaTime();
			this.currentFrame += delta * this.velocidade_cavalo;
			
			this.currentFrame2 += delta * 5;
		}
		
		this.update = function() {
			if (this.moveup) {
				if (this.y > 200) {
					this.y -= this.speed_y;
				}
			} else {
				if (this.y + this.h < 496) {
					this.y += this.weight;
				}
			}

			if (this.y <= 200) {
				this.moveup = false;
			}
			
			if (this.moveup1) {
				if (this.colisao_y > 210) {
					this.colisao_y -= this.speed_y;
				}
			} else {
				if (this.colisao_y + this.h < 496) {
					this.colisao_y += this.weight;
				}
			}

			if (this.colisao_y <= 210) {
				this.moveup1 = false;
			}

			if (this.y + this.h <= 496) {
				this.pulo_case = false;
			} else {
				this.pulo_case = true;
				this.espadada = false;
			}

			if (this.y <= 200) {
				this.pulo_case2 = false;
			}

			if (this.y + this.h >= 496) {
				this.pulo_case2 = true;
			}
			
			if(!this.pulo_case && !this.pulo_case2) {
				this.colisao_h = 90;
			} else {
				this.colisao_h = 116;
			}

			if(this.x < 100) {
				this.x += this.speed_x
			} else {
				this.speed_x = 0
			}

			if(tela.WIN) {
				this.speed_x = 4;
			}
			
			if(tela.WIN && tela.scene == "FASE1" || tela.WIN && tela.scene == "FASE2") {
				if(this.x < 840) {
					this.x += this.speed_x;
				}  else {
					this.speed_x = 0;
				}
			}
			
			if(tela.WIN && tela.scene == "FASE3") {
				if(this.x < 337) {
					this.x += this.speed_x;
				}  else {
					this.speed_x = 0;
				}
			}
			
			this.update_animacao();
		}	
			
			
		
		
		this.draw = function() {
			if( tela.scene == "FASE3") {
				if (this.pulo_case && this.x < 337) {
					/*context.fillStyle = "WHITE";
					context.fillRect(this.colisao_x, this.colisao_y, this.colisao_w, this.colisao_h);*/
					context.drawImage(this.animacao[Math.floor(this.currentFrame) % this.numFrames], this.x, this.y, this.w, this.h);
				}
			}
			
			if( tela.scene == "FASE1" || tela.scene == "FASE2" ) {
				if (this.pulo_case) {
					/*context.fillStyle = "WHITE";
					context.fillRect(this.colisao_x, this.colisao_y, this.colisao_w, this.colisao_h);*/
					context.drawImage(this.animacao[Math.floor(this.currentFrame) % this.numFrames], this.x, this.y, this.w, this.h);
				}
			}

			if (!this.pulo_case && this.pulo_case2 && !this.espadada) {
				/*context.fillStyle = "WHITE";
				context.fillRect(this.colisao_x, this.colisao_y, this.colisao_w, this.colisao_h);*/
				context.drawImage(this.subindo, this.x, this.y, this.w, this.h);
			}
			
			if (!this.pulo_case && !this.pulo_case2 && !this.espadada) {
				/*context.fillStyle = "WHITE";
				context.fillRect(this.colisao_x, this.colisao_y, this.colisao_w, this.colisao_h);*/
				context.drawImage(this.descendo, this.x, this.y, this.w, this.h);
			}
			
			if (this.espadada && this.pulo_case2) {
				context.drawImage(this.espadada_subindo[Math.floor(this.currentFrame2) % this.numFrames_espadada], this.x + 10, this.y, this.espadada_w, this.espadada_h);
			}
				
			if (this.espadada && !this.pulo_case2) {
				context.drawImage(this.espadada_descendo[Math.floor(this.currentFrame2) % this.numFrames_espadada], this.x + 10, this.y, this.espadada_w, this.espadada_h);
			}
			
			if (this.x >= 337 && tela.scene == "FASE3") {
				context.drawImage(this.subindo, this.x, this.y, this.w, this.h);
			}
		}
}	