function Screen() {
	this.scene = "SPLASHSCREEN";
	
	this.fade = new Fade();
	this.broom = new Broom();
	this.bar = new Bar();
	
	this.text = new Text(40, 57, "WHITE", "30px", "Arial");
	
	this.menu = new Menu();
	this.levelOne = new LevelOne();
	this.levelTwo = new LevelTwo();
	this.levelThree = new LevelThree();
	
	this.pauseContent = new Image();
	this.pauseContent.src = "resources/images/gameplay/pause/pauseScreen.png";
	this.loss = new Animation(9, "gameplay/loss/lossScreen", 10, false);	
	
	this.soundButton = new SoundButton(10, 10, 54, 57, "audioOn", "audioOff", "MENU");
	this.optionsButton = new CommomButton(55, 436, "optionsButton", "MENU", "OPTIONS");
	this.creditsButton = new CommomButton(537, 436, "creditsButton", "MENU", "CREDITS");
	this.playButton = new DifferentButton(288, 150, 224, 222, "playButton", "MENU", "LEVEL1");
	this.creditsMenuButton = new CommomButton(572, 20, "backButton", "CREDITS", "MENU");
	this.optionsMenuButton = new CommomButton(572, 20, "backButton", "OPTIONS", "MENU");
	this.lossMenuButton = new CommomButton(100, 436, "menuButton", "LOSS", "MENU");
	this.lossGameButton = new CommomButton(492, 436, "retryButton", "LOSS", "CURRENTLEVEL");
	this.pauseMenuButton = new CommomButton(296, 250, "menuButton", "PAUSE", "MENU");
	
	this.update = function() {
		this.menu.update();
		this.levelOne.update();
		this.levelTwo.update();
		this.levelThree.update();
		this.bar.update();
		this.fade.update();
		this.broom.update();
		this.loss.update();
	}
	
	this.draw = function() {
		this.menu.draw();
		this.levelOne.draw();
		this.levelTwo.draw();
		this.levelThree.draw();
		
		switch(this.scene){
			case "MENU":
				this.optionsButton.draw();
				this.creditsButton.draw();
				this.playButton.draw();
				this.soundButton.draw();
				break;
				
			case "OPTIONS":
				this.optionsMenuButton.draw();
				break;
				
			case "CREDITS":
				this.creditsMenuButton.draw();
				break;
				
			case "LEVEL1":
				runner.draw();
				for (var b in enemiesManager.bushWave) {
					enemiesManager.bushWave[b].draw();
				}
				
				this.bar.draw();
				this.text.draw();
				
				this.fade.draw();
				break;
				
			case "LEVEL2":
				runner.draw();
				for (var r in enemiesManager.rockWave) {
					enemiesManager.rockWave[r].draw();
				}
				for (var b in enemiesManager.blackBatWave) {
					enemiesManager.blackBatWave[b].draw();
				}
				
				this.bar.draw();
				this.text.draw();
				
				this.fade.draw();
				break;
				
			case "LEVEL3":
				runner.draw();
				for (var r in enemiesManager.barrelWave) {
					enemiesManager.barrelWave[r].draw();
				}
				for (var b in enemiesManager.purpleBatWave) {
					enemiesManager.purpleBatWave[b].draw();
				}
				this.broom.draw();
				
				this.bar.draw();
				this.text.draw();
				
				this.fade.draw();
				break;
				
			case "LOSS":
				context.clearRect(0, 0, canvas.width, canvas.height);
				context.drawImage(this.loss.animation[Math.floor(this.loss.currentFrame) % this.loss.numFrames], 0, 0);
				this.lossMenuButton.draw();
				this.lossGameButton.draw();
				break;
		}
		
		if (manager.pause){
			context.drawImage(this.pauseContent, 0, 0, canvas.width, canvas.height);
			this.pauseMenuButton.draw();
			this.soundButton.draw();
		}
	}
}