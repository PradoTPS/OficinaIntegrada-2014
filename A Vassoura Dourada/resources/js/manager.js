function Manager(){
	this.soundOn = true;
	this.winning = false;
	this.pause = false;
	this.nextLevel = false;
	this.currentLevel = "levelOne";
	
	this.deathToll = localStorage.getItem("deaths") === null ? 0 : localStorage.getItem("deaths");
	
	this.pauseClickAudio = new Audio();
	this.pauseClickAudio.src = "resources/audios/gameplay/pause/click.mp3";
	
	this.musicManager = new MusicManager();
	
	this.clickPause = function(){
		if ((screen.scene == "LEVEL1" || screen.scene == "LEVEL2" || screen.scene == "LEVEL3") && !this.winning) {
			this.pause = !this.pause;
			if(this.pause && this.soundOn) {
				this.pauseClickAudio.play();
			}
		}
	}
	
	this.clickSplashScreen = function(){
		if (screen.scene == "SPLASHSCREEN") {
			screen.scene = "MENU";
		}
	}
	
	this.restart = function(){
		runner.x = -120;
		runner.y = 375;
		runner.colliderX = 133;
		runner.colliderY = 385;
		runner.speedX = 8;
		runner.moveUp = false;
		runner.moveUp1 = false;
		runner.caseJump = true;
		runner.caseJump2 = true;
		
		screen.moonX = 400;
		screen.broom.y = -600;
		screen.bar.playerMapX = 200;
		
		for (var b = 0; b <= enemiesManager.bushMax; b++) {
			enemiesManager.bushWave.splice(b);
			enemiesManager.bushWave.push(new Bush());

			if (b > 0) {
				enemiesManager.bushWave[b].x = enemiesManager.bushWave[b - 1].x + enemiesManager.bushWave[b].w + runner.w + 300 + Math.floor(Math.random() * 500);
			} else {
				enemiesManager.bushWave[b].x = canvas.width + 30;
			}
		}
		
		for (var r = 0; r <= enemiesManager.rockMax; r++) {
			enemiesManager.rockWave.splice(r);
			enemiesManager.rockWave.push(new Rock());

			if (r > 0) {
				enemiesManager.rockWave[r].x = enemiesManager.rockWave[r - 1].x + enemiesManager.rockWave[r].w + runner.w + 500 + Math.floor(Math.random() * 500);
			} else {
				enemiesManager.rockWave[r].x = canvas.width + 30;
			}
		}
		
		for (var b = 0; b <= enemiesManager.blackBatMax; b++) {
			enemiesManager.blackBatWave.splice(b);
			enemiesManager.blackBatWave.push(new Bat(2));

			if (b > 0) {
				enemiesManager.blackBatWave[b].x = enemiesManager.blackBatWave[b - 1].x + enemiesManager.blackBatWave[b].w + runner.w + 1700 + Math.floor(Math.random(250) * 500);
			} else {
				enemiesManager.blackBatWave[b].x = canvas.width + 500 + Math.floor(Math.random() * 500);;
			}
		}
		
		for (var r = 0; r <= enemiesManager.barrelMax; r++) {
			enemiesManager.barrelWave.splice(r);
			enemiesManager.barrelWave.push(new Barrel());

			if (r > 0) {
				enemiesManager.barrelWave[r].x = enemiesManager.barrelWave[r - 1].x + enemiesManager.barrelWave[r].w + runner.w + 300 + Math.floor(Math.random() * 500);
			} else {
				enemiesManager.barrelWave[r].x = canvas.width + 30;
			}
		}
				
		for (var b = 0; b <= enemiesManager.purpleBatMax; b++) {
			enemiesManager.purpleBatWave.splice(b);
			enemiesManager.purpleBatWave.push(new Bat(1));

			if (b > 0) {
				enemiesManager.purpleBatWave[b].x = enemiesManager.purpleBatWave[b - 1].x + enemiesManager.purpleBatWave[b].w + runner.w + 1000 + Math.floor(Math.random(250) * 500);
			} else {
				enemiesManager.purpleBatWave[b].x = canvas.width + 500 + Math.floor(Math.random() * 500);;
			}
		}
	}
	
	this.passLevel = function(){
		this.nextLevel = false;
		this.winning = false;
		
		if(this.currentLevel == "levelOne"){
			this.currentLevel = "levelTwo";
		} else if(this.currentLevel == "levelTwo"){
			this.currentLevel = "levelThree";
		} else if(this.currentLevel == "levelThree"){
			this.currentLevel = "levelOne";
		}
	}
	
	this.winChecker= function() {
		if(screen.scene == "LEVEL1") {
			for (var b = 0; b <= enemiesManager.bushMax; b++) {
				if(enemiesManager.bushWave[enemiesManager.bushMax].x + enemiesManager.bushWave[enemiesManager.bushMax].w <= 0) {
					this.winning = true;
				}
			}
		}
		
		if(screen.scene == "LEVEL2") {
			for (var r = 0; r <= enemiesManager.rockMax; r++) {
				for (var b = 0; b <= enemiesManager.blackBatMax; b++) {
					if(enemiesManager.rockWave[enemiesManager.rockMax].x + enemiesManager.rockWave[enemiesManager.rockMax].w <= 0) {
						if (enemiesManager.blackBatWave[enemiesManager.blackBatMax].x + enemiesManager.blackBatWave[enemiesManager.blackBatMax].w <= 0 || enemiesManager.blackBatWave[enemiesManager.blackBatMax].y + enemiesManager.blackBatWave[enemiesManager.blackBatMax].h <= 0) {
							this.winning = true;
						}
					}
				}
			}
		}
		
		if(screen.scene == "LEVEL3") {
			for (var r = 0; r <= enemiesManager.barrelMax; r++) {
				for (var b = 0; b <= enemiesManager.purpleBatMax; b++) {
					if(enemiesManager.barrelWave[enemiesManager.barrelMax].x + enemiesManager.barrelWave[enemiesManager.barrelMax].w <= 0) {
						if (enemiesManager.purpleBatWave[enemiesManager.purpleBatMax].x + enemiesManager.purpleBatWave[enemiesManager.purpleBatMax].w <= 0 || enemiesManager.purpleBatWave[enemiesManager.purpleBatMax].y + enemiesManager.purpleBatWave[enemiesManager.purpleBatMax].h <= 0) {
							this.winning = true;
						}
					}
				}
			}
		}
	}
	
	this.levelChecker = function(){
		if(screen.scene == "LEVEL1") {
			this.currentLevel = "levelOne";
		} else if(screen.scene == "LEVEL2"){
			this.currentLevel = "levelTwo";
		} else if(screen.scene == "LEVEL3"){
			this.currentLevel = "levelThree";
		}
	}
	
	this.update = function(){
		if(screen.scene == "LEVEL1" && !this.pause) {
			runner.update();
			enemiesManager.bushWaveUpdate();
		}
		if(screen.scene == "LEVEL2" && !this.pause) {
			runner.update();
			enemiesManager.rockWaveUpdate();
			enemiesManager.blackBatWaveUpdate();
		}
		if(screen.scene == "LEVEL3" && !this.pause) {
			runner.update();
			enemiesManager.barrelWaveUpdate();
			enemiesManager.purpleBatWaveUpdate();
		}
		screen.update();
		this.winChecker();
		this.levelChecker();
		this.musicManager.update();
		
		if(screen.scene == "LOSS"){
			this.restart();
		}

		if(this.nextLevel) {
			this.restart();
			this.passLevel();
		}
	}
}