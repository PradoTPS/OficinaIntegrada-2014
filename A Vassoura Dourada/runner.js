var Runner = function() {
	this.x = -120;
	this.y = 375;
	this.w = 126;
	this.h = 126;
	this.weight = 12;
	this.speedX = 8;
	this.speedY = 12;
	this.swordW = 114;
	this.swordH = 132;
	this.colliderX = 133;
	this.colliderY = 385;
	this.colliderW = 84;
	this.colliderH = 116;
	
	this.moveUp = false;
	this.moveUp1 = false;
	this.caseJump = true;
	this.caseJump2 = true;
	this.sword = false;
	
	this.up = new Image();
	this.up.src = "IMAGEM/Jogo/Pedro/Pulo/pulo1.png";
	
	this.down = new Image();
	this.down.src = "IMAGEM/Jogo/Pedro/Pulo/pulo2.png";
	
	this.won = new Image();
	this.won.src = "IMAGEM/JOGO/Pedro/won/pedro_won.png";
	
	this.start = (new Date()).getTime();
	this.current;
	this.currentFrame = 0;
	this.currentFrame2 = 0;
	
	this.animacao = new Array();
	this.numFrames = 4;
	this.velocidade_cavalo = 7;
	this.sword_up = new Array();
	this.sword_down = new Array();
	this.numFrames_sword = 3;
	
		for (var i = 0; i < this.numFrames; i++) {
			this.animacao[i] = new Image();
			this.animacao[i].src = "IMAGEM/Jogo/Pedro/Andando/pedro" + (i + 1) + ".png";
		}
	
		for (var i = 0; i < this.numFrames_sword; i++) {
			this.sword_up[i] = new Image();
			this.sword_up[i].src = "IMAGEM/Jogo/Pedro/sword_up/pedro1_esp" + (i + 1) + ".png";
		}
	
		for (var i = 0; i < this.numFrames_sword; i++) {
			this.sword_down[i] = new Image();
			this.sword_down[i].src = "IMAGEM/Jogo/Pedro/sword_down/pedro2_esp" + (i + 1) + ".png";
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
		
	this.sword_erro_audio = new Audio();
	this.sword_erro_audio.src = "AUDIO/Jogo/sword/espada_erro.mp3";
		
	this.sword_audio = new Audio();
	this.sword_audio.src = "AUDIO/Jogo/sword/sword.mp3";
		
	this.cavalo_pulo_audio = new Audio();
	this.cavalo_pulo_audio.src = "AUDIO/Jogo/Cavalo/pulo_cavalo.mp3";
		
		this.pulo = function() {
			if (this.y + this.h >= 496) {
				this.moveUp = true;
				this.moveUp1 = true;
			}
		}
		
		this.update_animacao = function() {
			var delta = this.deltaTime();
			this.currentFrame += delta * this.velocidade_cavalo;
			
			this.currentFrame2 += delta * 5;
		}
		
		this.update = function() {
			if (this.moveUp) {
				if (this.y > 200) {
					this.y -= this.speedY;
				}
			} else {
				if (this.y + this.h < 496) {
					this.y += this.weight;
				}
			}

			if (this.y <= 200) {
				this.moveUp = false;
			}
			
			if (this.moveUp1) {
				if (this.colliderY > 210) {
					this.colliderY -= this.speedY;
				}
			} else {
				if (this.colliderY + this.h < 496) {
					this.colliderY += this.weight;
				}
			}

			if (this.colliderY <= 210) {
				this.moveUp1 = false;
			}

			if (this.y + this.h <= 496) {
				this.caseJump = false;
			} else {
				this.caseJump = true;
				this.sword = false;
			}

			if (this.y <= 200) {
				this.caseJump2 = false;
			}

			if (this.y + this.h >= 496) {
				this.caseJump2 = true;
			}
			
			if(!this.caseJump && !this.caseJump2) {
				this.colliderH = 90;
			} else {
				this.colliderH = 116;
			}

			if(this.x < 100) {
				this.x += this.speedX
			} else {
				this.speedX = 0
			}

			/*if(tela.WIN) {
				this.speedX = 4;
			}*/
			
			/*if(tela.WIN && tela.scene == "FASE1" || tela.WIN && tela.scene == "FASE2") {
				if(this.x < 840) {
					this.x += this.speedX;
				}  else {
					this.speedX = 0;
				}
			}*/
			
			/*if(tela.WIN && tela.scene == "FASE3") {
				if(this.x < 337) {
					this.x += this.speedX;
				}  else {
					this.speedX = 0;
				}
			}*/
			
			this.update_animacao();
		}	
			
			
		
		
		this.draw = function() {
			/*if( tela.scene == "FASE3") {
				if (this.caseJump && this.x < 337) {
					context.fillStyle = "RED";
					context.fillRect(this.colliderX, this.colliderY, this.colliderW, this.colliderH);
					context.drawImage(this.animacao[Math.floor(this.currentFrame) % this.numFrames], this.x, this.y, this.w, this.h);
				}
			}*/
			
			//if( tela.scene == "FASE1" || tela.scene == "FASE2" ) {
				if (this.caseJump) {
					context.fillStyle = "RED";
					context.fillRect(this.colliderX, this.colliderY, this.colliderW, this.colliderH);
					context.drawImage(this.animacao[Math.floor(this.currentFrame) % this.numFrames], this.x, this.y, this.w, this.h);
				}
			//}

			if (!this.caseJump && this.caseJump2 && !this.sword) {
				context.fillStyle = "RED";
				context.fillRect(this.colliderX, this.colliderY, this.colliderW, this.colliderH);
				context.drawImage(this.up, this.x, this.y, this.w, this.h);
			}
			
			if (!this.caseJump && !this.caseJump2 && !this.sword) {
				context.fillStyle = "RED";
				context.fillRect(this.colliderX, this.colliderY, this.colliderW, this.colliderH);
				context.drawImage(this.down, this.x, this.y, this.w, this.h);
			}
			
			if (this.sword && this.caseJump2) {
				context.drawImage(this.sword_up[Math.floor(this.currentFrame2) % this.numFrames_sword], this.x + 10, this.y, this.swordW, this.swordH);
			}
				
			if (this.sword && !this.caseJump2) {
				context.drawImage(this.sword_down[Math.floor(this.currentFrame2) % this.numFrames_sword], this.x + 10, this.y, this.swordW, this.swordH);
			}
			
			/*if (this.x >= 337 && tela.scene == "FASE3") {
				context.drawImage(this.up, this.x, this.y, this.w, this.h);
			}*/
		}
}	