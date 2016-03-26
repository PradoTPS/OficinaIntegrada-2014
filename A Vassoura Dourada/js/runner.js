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
	this.up.src = "images/gameplay/player/jump/up.png";
	this.down = new Image();
	this.down.src = "images/gameplay/player/jump/down.png";
	this.won = new Image();
	this.won.src = "images/gameplay/player/win.png";
	
	this.running = new Animation(4, "gameplay/player/running/running", 7, false);
	this.hittingUp = new Animation(3, "gameplay/player/hitting/up/hittingUp", 5, false);
	this.hittingDown = new Animation(3, "gameplay/player/hitting/down/hittingDown", 5, false);
	
	this.walkingHorseAudio = new Audio();
	this.walkingHorseAudio.src = "audios/gameplay/horse/running.mp3";
	this.jumpHorseAudio = new Audio();
	this.jumpHorseAudio.src = "audios/gameplay/horse/jump.mp3";
	this.diedContactAudio = new Audio();
	this.diedContactAudio.src = "audios/gameplay/dying/contact.mp3";
	this.diedBatAudio = new Audio();
	this.diedBatAudio.src = "audios/gameplay/dying/bat.mp3";
	this.diedHorseAudio = new Audio();
	this.diedHorseAudio.src = "audios/gameplay/dying/dyingHorse.mp3";
	this.cannotHitAudio = new Audio();
	this.cannotHitAudio.src = "audios/gameplay/hitting/missHit.mp3";
	this.hittedAudio = new Audio();
	this.hittedAudio.src = "audios/gameplay/hitting/hit.mp3";
	this.hittedBatAudio = new Audio();
	this.hittedBatAudio.src = "audios/gameplay/hitting/killingBat.mp3";
		
	this.jump = function() {
		if((screen.scene == "LEVEL1" || screen.scene == "LEVEL2" || screen.scene == "LEVEL3") && !manager.pause && !manager.winning) {
			if (this.y + this.h >= 496) {
				this.moveUp = true;
				this.moveUp1 = true;
			}
			
			if(manager.soundOn && !manager.pause) {
				this.jumpHorseAudio.play();
			}
		}
	}
	
	this.hit = function(){
		if ((screen.scene == "LEVEL1" || screen.scene == "LEVEL2" || screen.scene == "LEVEL3") && !manager.pause) {
			for (var b = 0; b < enemiesManager.purpleBatMax; b++) {
				if( enemiesManager.purpleBatWave[b].x <= 320 && enemiesManager.purpleBatWave[b].x >= 115 && this.colliderY <= 350 && !this.caseJump) {
					enemiesManager.purpleBatWave[b].die();
				
					if(manager.soundOn && !manager.pause) {
						this.hittedBatAudio.play();
						this.hittedAudio.play();
					}
					
				} else if(manager.soundOn && !manager.pause && !this.jump.case) {
					this.cannotHitAudio.play();
				}
			}
			
			for (var b = 0; b < enemiesManager.blackBatMax; b++) {
				if( enemiesManager.blackBatWave[b].x <= 320 && enemiesManager.blackBatWave[b].x >= 115 && this.colliderY <= 350 && !this.caseJump) {
					enemiesManager.blackBatWave[b].die();
					
					if(manager.soundOn && !manager.pause) {
						this.hittedBatAudio.play();
						this.hittedAudio.play();
					}
					
				} else if(manager.soundOn && !manager.pause && !this.jump.case) {
					this.cannotHitAudio.play();
				}
			}
			this.hitting = true;
		}
	}
	
	this.animationUpdate = function() {
		this.running.update();
		this.hittingUp.update();
		this.hittingDown.update();
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
				context.drawImage(this.running.animation[Math.floor(this.running.currentFrame) % this.running.numFrames], this.x, this.y, this.w, this.h);
			}
		}
		
		if( screen.scene == "LEVEL1" || screen.scene == "LEVEL2" ) {
			if (this.caseJump) {
				/*context.fillStyle = "WHITE";
				context.fillRect(this.colliderX, this.colliderY, this.colliderW, this.colliderH);*/
				context.drawImage(this.running.animation[Math.floor(this.running.currentFrame) % this.running.numFrames], this.x, this.y, this.w, this.h);
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
			context.drawImage(this.hittingUp.animation[Math.floor(this.hittingUp.currentFrame) % this.hittingUp.numFrames], this.x + 10, this.y, this.hittingW, this.hittingH);
		}
			
		if (this.hitting && !this.caseJump2) {
			context.drawImage(this.hittingDown.animation[Math.floor(this.hittingDown.currentFrame) % this.hittingDown.numFrames], this.x + 10, this.y, this.hittingW, this.hittingH);
		}
		
		if (this.x >= 337 && screen.scene == "LEVEL3") {
			context.drawImage(this.won, this.x, this.y, this.w, this.h);
		}
	}
}	