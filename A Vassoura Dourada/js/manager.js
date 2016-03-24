function Manager(){
	this.soundOn = true;
	this.winning = false;
	this.pause = false;
	this.nextLevel = false;
	this.currentLevel = "levelOne";
	
	this.deathToll = localStorage.getItem("deaths") === null ? 0 : localStorage.getItem("deaths");
	
	this.clickPause = function(){
		if ((screen.scene == "LEVEL1" || screen.scene == "LEVEL2" || screen.scene == "LEVEL3") && !this.winning) {
			this.pause = !this.pause;
			if(this.pause && this.soundOn) {
				screen.pause_click_audio.play();
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
		screen.broomY = -600;
		screen.playerMapX = 200;
		
		for (var a = 0; a <= MEX; a++) {
			n_arbusto.splice(a);
			n_arbusto.push(new Bush());

			if (a > 0) {
				n_arbusto[a].x = n_arbusto[a - 1].x + n_arbusto[a].w + runner.w + 300 + Math.floor(Math.random() * 500);
			} else {
				n_arbusto[a].x = canvas.width + 30;
			}
		}
		
		for (var p = 0; p <= MIX; p++) {
			n_pedra.splice(p);
			n_pedra.push(new Rock());

			if (p > 0) {
				n_pedra[p].x = n_pedra[p - 1].x + n_pedra[p].w + runner.w + 500 + Math.floor(Math.random() * 500);
			} else {
				n_pedra[p].x = canvas.width + 30;
			}
		}
		
		for (var m = 0; m <= MUX; m++) {
			n_morcego2.splice(m);
			n_morcego2.push(new Bat(2));

			if (m > 0) {
				n_morcego2[m].x = n_morcego2[m - 1].x + n_morcego2[m].w + runner.w + 1700 + Math.floor(Math.random(250) * 500);
			} else {
				n_morcego2[m].x = canvas.width + 500 + Math.floor(Math.random() * 500);;
			}
		}
		
		for (var b = 0; b <= MAX; b++) {
			n_barril.splice(b);
			n_barril.push(new Barrel());

			if (b > 0) {
				n_barril[b].x = n_barril[b - 1].x + n_barril[b].w + runner.w + 300 + Math.floor(Math.random() * 500);
			} else {
				n_barril[b].x = canvas.width + 30;
			}
		}
				
		for (var m = 0; m <= MOX; m++) {
			n_morcego.splice(m);
			n_morcego.push(new Bat(1));

			if (m > 0) {
				n_morcego[m].x = n_morcego[m - 1].x + n_morcego[m].w + runner.w + 1000 + Math.floor(Math.random(250) * 500);
			} else {
				n_morcego[m].x = canvas.width + 500 + Math.floor(Math.random() * 500);;
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
}