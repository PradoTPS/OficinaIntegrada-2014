function EnemiesManager(){
	this.bushWave = new Array();
	this.bushMax = 10;
	for (var b = 0; b <= this.bushMax; b++) {
		this.bushWave.push(new Bush());
		
		if (b > 0) {
			this.bushWave[b].x = this.bushWave[b - 1].x + this.bushWave[b].w + runner.w + 300 + Math.floor(Math.random() * 500);
		} else {
			this.bushWave[b].x = canvas.width + 30;
		}
	}
	
	this.bushWaveUpdate = function() {
		for (var b in this.bushWave) {
			this.bushWave[b].update();
		}
	}
	
	this.rockWave = new Array();
	this.rockMax = 15;
	for (var r = 0; r <= this.rockMax; r++) {
		this.rockWave.push(new Rock());

		if (r > 0) {
			this.rockWave[r].x = this.rockWave[r - 1].x + this.rockWave[r].w + runner.w + 500 + Math.floor(Math.random() * 500);
		} else {
			this.rockWave[r].x = canvas.width + 30;
		}
	}
	
	this.rockWaveUpdate = function() {
		for (var r in this.rockWave) {
			this.rockWave[r].update();
		}
	}
	
	this.blackBatWave = new Array();
	this.blackBatMax = 8;
	for (var b = 0; b <= this.blackBatMax; b++) {
		this.blackBatWave.push(new Bat(2));
		
		if (b > 0) {
			this.blackBatWave[b].x = this.blackBatWave[b - 1].x + this.blackBatWave[b].w + runner.w + 1700 + Math.floor(Math.random(250) * 500);
		} else {
			this.blackBatWave[b].x = canvas.width + 500 + Math.floor(Math.random() * 500);;
		}
	}
	
	this.blackBatWaveUpdate = function() {
		for (var b in this.blackBatWave) {
			this.blackBatWave[b].update();
		}
	}
	
	this.barrelWave = new Array();
	this.barrelMax = 25;
	for (var r = 0; r <= this.barrelMax; r++) {
		this.barrelWave.push(new Barrel());

		if (r > 0) {
			this.barrelWave[r].x = this.barrelWave[r - 1].x + this.barrelWave[r].w + runner.w + 300 + Math.floor(Math.random() * 500);
		} else {
			this.barrelWave[r].x = canvas.width + 30;
		}
	}
	
	this.barrelWaveUpdate = function() {
		for (var r in this.barrelWave) {
			this.barrelWave[r].update();
		}
	}
	
	this.purpleBatWave = new Array();
	this.purpleBatMax = 16;
	for (var b = 0; b <= this.purpleBatMax; b++) {
		this.purpleBatWave.push(new Bat(1));
		
		if (b > 0) {
			this.purpleBatWave[b].x = this.purpleBatWave[b - 1].x + this.purpleBatWave[b].w + runner.w + 1000 + Math.floor(Math.random(250) * 500);
		} else {
			this.purpleBatWave[b].x = canvas.width + 500 + Math.floor(Math.random() * 500);;
		}
	}
	
	this.purpleBatWaveUpdate = function() {
		for (var b in this.purpleBatWave) {
			this.purpleBatWave[b].update();
		}
	}
}