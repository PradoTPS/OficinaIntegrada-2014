function MusicManager(){
	this.menuMusic = new Audio();
	this.menuMusic.src = "audios/menu/menu.mp3";
	this.lossMusic = new Audio();
	this.lossMusic.src = "audios/gameplay/dying/loss.mp3";
	this.winShortMusic = new Audio();
	this.winShortMusic.src = "audios/gameplay/win/shortWin.mp3";
	this.winLongMusic = new Audio();
	this.winLongMusic.src = "audios/gameplay/win/longWin.mp3";
	this.levelOneMusic = new Audio();
	this.levelOneMusic.src = "audios/gameplay/music/levelOne.mp3";
	this.levelTwoMusic = new Audio();
	this.levelTwoMusic.src = "audios/gameplay/music/levelTwo.mp3";
	this.levelThreeMusic = new Audio();
	this.levelThreeMusic.src = "audios/gameplay/music/levelThree.mp3";
	
	this.update = function(){
		if(manager.soundOn) {
			if (screen.scene == "SPLASHSCREEN" || screen.scene == "MENU" || screen.scene == "OPTIONS" || screen.scene == "CREDITS") {
				this.menuMusic.play();
			} else {
				this.menuMusic.pause();
			}
			if (screen.scene == "LEVEL1" && !manager.winning) {
				this.levelOneMusic.play();
			} else {
				this.levelOneMusic.pause();
			}
			if (screen.scene == "LEVEL2" && !manager.winning) {
				this.levelTwoMusic.play();
			} else {
				this.levelTwoMusic.pause();
			}
			if (screen.scene == "LEVEL3" && !manager.winning) {
				this.levelThreeMusic.play();
			} else {
				this.levelThreeMusic.pause();
			}
			if ((screen.scene == "LEVEL1" || screen.scene == "LEVEL2") && manager.winning) {
				this.winShortMusic.play();
			} else {
				this.winShortMusic.pause();
			}
			if (screen.scene == "LEVEL3" && manager.winning) {
				this.winLongMusic.play();
			} else {
				this.winLongMusic.pause();
			}
			if (screen.scene == "LOSS") {
				this.lossMusic.play();
			} else {
				this.lossMusic.pause();
			}
		} else {
			this.menuMusic.pause();
			this.levelOneMusic.pause();
			this.levelTwoMusic.pause();
			this.levelThreeMusic.pause();
			this.winShortMusic.pause();
			this.winLongMusic.pause();
			this.lossMusic.pause();
		}
	}
}