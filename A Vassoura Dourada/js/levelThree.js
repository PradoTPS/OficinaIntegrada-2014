function LevelThree(){
	this.mountain = new Image();
	this.mountain.src = "images/gameplay/background/levelThree/mountain.png";
	this.mountainX = 0;
	this.mountainX2 = 1600;
	this.mountainY = 0;
	this.mountainW = 1600;
	this.mountainH = 500;
	this.mountainSpeed = 4;
	
	this.castlePilars = new Image();
	this.castlePilars.src = "images/gameplay/background/levelThree/castlePilars.png";
	this.castlePilarsX = 0;
	this.castlePilarsY = 0;
	this.castlePilarsW = 1600;
	this.castlePilarsH = 500;
	this.castlePilarsSpeed = 7;
	
	this.moon = new Image();
	this.moon.src = "images/gameplay/background/levelThree/moon.png";
	this.moonX = 400;
	this.moonY = 100;
	this.moonW = 672;
	this.moonH = 249;
	this.moonSpeed = 0.5;
	
	this.floor = new Image();
	this.floor.src = "images/gameplay/background/levelThree/floor.png";
	this.floorX = 0;
	this.floorX2 = 1600;
	this.floorY = 500;
	this.floorW = 1605;
	this.floorH = 104;
	this.floorSpeed = 15;
	
	this.update = function(){
		if(!manager.pause) {
			if(!manager.winning) {
				if(runner.x < 100) {
					this.mountainSpeed = 0;
					this.moonSpeed = 0;
					this.castlePilarsSpeed = 0;
					this.floorSpeed = 0;
				} else {
					this.mountainSpeed = 4;
					this.moonSpeed = 0.5;
					this.castlePilarsSpeed = 7;
					this.floorSpeed = 15;
				}
			}
			
			this.castlePilarsX -= this.castlePilarsSpeed;
			this.mountainX -= this.mountainSpeed;
			this.mountainX2 -= this.mountainSpeed;
			this.moonX -= this.moonSpeed;
			this.floorX -= this.floorSpeed;
			this.floorX2 -= this.floorSpeed;
			
			if (this.castlePilarsX <= -800) {
				this.castlePilarsX = 0;
			}	
			if (this.mountainX + this.mountainW <= 0) {
				this.mountainX = 1600;
			}
			if (this.mountainX2 + this.mountainW <= 0) {
				this.mountainX2 = 1600;
			}
			if (this.floorX + this.floorW <= 0) {
				this.floorX = 1600;
			}
			if (this.floorX2 + this.floorW <= 0) {
				this.floorX2 = 1600;
			}
		}
		
		if (manager.winning) {
			this.mountainSpeed = 0;
			this.moonSpeed = 0;
			this.castlePilarsSpeed = 0;
			this.floorSpeed = 0;
		}
	}
	
	this.draw = function(){
		if(screen.scene == "LEVEL3"){
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.drawImage(this.mountain, this.mountainX, this.mountainY, this.mountainW, this.mountainH);
			context.drawImage(this.mountain, this.mountainX2, this.mountainY, this.mountainW, this.mountainH);
			context.drawImage(this.moon, this.moonX, this.moonY, this.moonW, this.moonH);
			context.drawImage(this.castlePilars, this.castlePilarsX, this.castlePilarsY, this.castlePilarsW, this.castlePilarsH);
			context.drawImage(this.floor, this.floorX, this.floorY, this.floorW, this.floorH);
			context.drawImage(this.floor, this.floorX2, this.floorY, this.floorW, this.floorH);
		}
	}
}