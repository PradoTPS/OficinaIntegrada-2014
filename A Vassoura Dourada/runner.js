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

	this.this.sword = false;
	
	this.up = new Image();
	this.up.src = "IMAGEM/Jogo/Pedro/Pulo/pulo1.png";
	
	this.down = new Image();
	this.down.src = "IMAGEM/Jogo/Pedro/Pulo/pulo2.png";
	
	this.start = (new Date()).getTime();
	this.current;
	this.currentMoveFrame = 0;
	this.currentSwordFrame = 0;
	
	this.animacao = new Array();
	this.numMoveFrames = 4;
	this.velocidade_cavalo = 7;
	this.sword_up = new Array();
	this.sword_down = new Array();
	this.numSwordFrames = 3;
	
		for (var i = 1; i <= this.numMoveFrames; i++) {
			this.animacao[i - 1] = new Image();
			this.animacao[i - 1].src = "IMAGEM/Jogo/Pedro/Andando/pedro" + (i) + ".png";
		}
	
		for (var i = 1; i <= this.numSwordFrames; i++) {
			this.sword_up[i - 1] = new Image();
			this.sword_up[i - 1].src = "IMAGEM/Jogo/Pedro/Espadada_Subindo/pedro1_esp" + (i) + ".png";
		}
	
		for (var i = 1; i <= this.numSwordFrames; i++) {
			this.sword_down[i - 1] = new Image();
			this.sword_down[i - 1].src = "IMAGEM/Jogo/Pedro/Espadada_Descendo/pedro2_esp" + (i) + ".png";
		}

	this.deltaTime = function() {
		this.current = (new Date()).getTime();
		this.elapsed = this.current - this.start;
		this.start = this.current;
		var delta = this.elapsed / 1000;
		return delta;
	}
		
		this.pulo = function() {
			if (this.y + this.h >= 496) {
				this.moveUp = true;
				this.moveUp1 = true;
			}
		}
		
		this.update_animacao = function() {
			var delta = this.deltaTime();
			this.currentMoveFrame += delta * this.velocidade_cavalo;
			
			this.currentSwordFrame += delta * 5;
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
			
			this.update_animacao();
		}	
			
			
		
		
		this.draw = function() {
			if (this.caseJump) {
				context.fillStyle = "RED";
				context.fillRect(this.colliderX, this.colliderY, this.colliderW, this.colliderH);
				context.drawImage(this.animacao[Math.floor(this.currentMoveFrame) % this.numMoveFrames], this.x, this.y, this.w, this.h);
			}

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
				context.drawImage(this.sword_up[Math.floor(this.currentSwordFrame) % this.numSwordFrames], this.x + 10, this.y, this.swordW, this.swordH);
			}
				
			if (this.sword && !this.caseJump2) {
				context.drawImage(this.sword_down[Math.floor(this.currentSwordFrame) % this.numSwordFrames], this.x + 10, this.y, this.swordW, this.swordH);
			}
		}
}	