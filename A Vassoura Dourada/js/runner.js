function Runner() {
	this.x = -120;
	this.y = 375;
	this.w = 126;
	this.h = 126;
	this.weight = 12;
	this.speedX = 8;
	this.speedY = 12;
	
	this.colliderX = 133;
	this.colliderY = 385;
	this.colliderW = 84;
	this.colliderH = 116;
	
	this.hittingW = 114;
	this.hittingH = 132;
	
	this.moveUp = false;
	this.moveUp1 = false;
	this.caseJump = true;
	this.caseJump2 = true;
	this.hitting = false;
	
	this.up = new Image();
	this.up.src = "IMAGEM/Jogo/Pedro/Pulo/pulo1.png";
	
	this.down = new Image();
	this.down.src = "IMAGEM/Jogo/Pedro/Pulo/pulo2.png";
	
	this.won = new Image();
	this.won.src = "IMAGEM/JOGO/Pedro/Ganhou/pedro_ganhou.png";
	
	this.start = (new Date()).getTime();
	this.current;
	this.currentFrame = 0;
	this.currentFrame2 = 0;
	
	this.animation = new Array();
	this.numFrames = 4;
	this.horseSpeed = 7;
	this.hittingUp = new Array();
	this.hittingDown = new Array();
	this.numFramesHitting = 3;
	
	for (var i = 0; i < this.numFrames; i++) {
		this.animation[i] = new Image();
		this.animation[i].src = "IMAGEM/Jogo/Pedro/Andando/pedro" + (i + 1) + ".png";
	}

	for (var i = 0; i < this.numFramesHitting; i++) {
		this.hittingUp[i] = new Image();
		this.hittingUp[i].src = "IMAGEM/Jogo/Pedro/Espadada_Subindo/pedro1_esp" + (i + 1) + ".png";
	}

	for (var i = 0; i < this.numFramesHitting; i++) {
		this.hittingDown[i] = new Image();
		this.hittingDown[i].src = "IMAGEM/Jogo/Pedro/Espadada_Descendo/pedro2_esp" + (i + 1) + ".png";
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
	this.espadada_erro_audio.src = "AUDIO/Jogo/espadada/espada_erro.mp3";
		
	this.espadada_audio = new Audio();
	this.espadada_audio.src = "AUDIO/Jogo/espadada/espadada.mp3";
		
	this.cavalo_pulo_audio = new Audio();
	this.cavalo_pulo_audio.src = "AUDIO/Jogo/Cavalo/pulo_cavalo.mp3";
		
	this.jump = function() {
		if((screen.scene == "LEVEL1" || screen.scene == "LEVEL2" || screen.scene == "LEVEL3") && !manager.pause && !manager.winning) {
			if (this.y + this.h >= 496) {
				this.moveUp = true;
				this.moveUp1 = true;
			}
			
			if(manager.soundOn && !manager.pause) {
				screen.cavalo_pulo_audio.play();
			}
		}
	}
	
	this.animationUpdate = function() {
		var delta = this.deltaTime();
		this.currentFrame += delta * this.horseSpeed;
		
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
			this.hitting = false;
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

		if(manager.winning) {
			this.speedX = 4;
		}
		
		if(manager.winning && screen.scene == "LEVEL1" || manager.winning && screen.scene == "LEVEL2") {
			if(this.x < 840) {
				this.x += this.speedX;
			}  else {
				this.speedX = 0;
			}
		}
		
		if(manager.winning && screen.scene == "LEVEL3") {
			if(this.x < 337) {
				this.x += this.speedX;
			}  else {
				this.speedX = 0;
			}
		}
		
		this.animationUpdate();
	}	
	
	this.draw = function() {
		if( screen.scene == "LEVEL3") {
			if (this.caseJump && this.x < 337) {
				/*context.fillStyle = "WHITE";
				context.fillRect(this.colliderX, this.colliderY, this.colliderW, this.colliderH);*/
				context.drawImage(this.animation[Math.floor(this.currentFrame) % this.numFrames], this.x, this.y, this.w, this.h);
			}
		}
		
		if( screen.scene == "LEVEL1" || screen.scene == "LEVEL2" ) {
			if (this.caseJump) {
				/*context.fillStyle = "WHITE";
				context.fillRect(this.colliderX, this.colliderY, this.colliderW, this.colliderH);*/
				context.drawImage(this.animation[Math.floor(this.currentFrame) % this.numFrames], this.x, this.y, this.w, this.h);
			}
		}

		if (!this.caseJump && this.caseJump2 && !this.hitting) {
			/*context.fillStyle = "WHITE";
			context.fillRect(this.colliderX, this.colliderY, this.colliderW, this.colliderH);*/
			context.drawImage(this.up, this.x, this.y, this.w, this.h);
		}
		
		if (!this.caseJump && !this.caseJump2 && !this.hitting) {
			/*context.fillStyle = "WHITE";
			context.fillRect(this.colliderX, this.colliderY, this.colliderW, this.colliderH);*/
			context.drawImage(this.down, this.x, this.y, this.w, this.h);
		}
		
		if (this.hitting && this.caseJump2) {
			context.drawImage(this.hittingUp[Math.floor(this.currentFrame2) % this.numFramesHitting], this.x + 10, this.y, this.hittingW, this.hittingH);
		}
			
		if (this.hitting && !this.caseJump2) {
			context.drawImage(this.hittingDown[Math.floor(this.currentFrame2) % this.numFramesHitting], this.x + 10, this.y, this.hittingW, this.hittingH);
		}
		
		if (this.x >= 337 && screen.scene == "LEVEL3") {
			context.drawImage(this.up, this.x, this.y, this.w, this.h);
		}
	}
}	