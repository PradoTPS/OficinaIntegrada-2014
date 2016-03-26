function Menu(){
	this.background = new Image();
	this.background.src = "resources/images/menu/static/background.png";
	
	this.logo = new Image();
	this.logo.src = "resources/images/menu/static/logo.png";
	
	this.optionsContent = new Image();
	this.optionsContent.src = "resources/images/menu/static/instructions.png";
	
	this.creditsContent = new Image();
	this.creditsContent.src = "resources/images/menu/static/credits.png";
	
	this.clouds = new Image();
	this.clouds.src = "resources/images/menu/dinamic/clouds.png";
	this.cloudsX = -800;
	this.cloudsX2 = 0;
	this.cloudsY = 80;
	this.cloudsW = 800;
	this.cloudsH = 198;
	this.cloudsSpeed = 2;
	
	this.castle = new Animation(2, "menu/dinamic/castle", 4, false);
	this.pressSpace = new Animation(13, "menu/pressSpace/space", 8, false);
	
	this.update = function() {
		this.cloudsX += this.cloudsSpeed;
		if (this.cloudsX >= 800) {
			this.cloudsX = -800;
		}
		
		this.cloudsX2 += this.cloudsSpeed;
		if (this.cloudsX2 >= 800) {
			this.cloudsX2 = -800;
		}
		
		this.castle.update();
		this.pressSpace.update();
	}
	
	this.draw = function(){
		if(screen.scene == "SPLASHSCREEN" || screen.scene == "MENU" || screen.scene == "OPTIONS" || screen.scene == "CREDITS" ){
			context.clearRect(0,0,canvas.width,canvas.height);
			context.drawImage(this.background, 0, 0, canvas.width, canvas.height);
			context.drawImage(this.clouds, this.cloudsX, this.cloudsY, this.cloudsW, this.cloudsH);
			context.drawImage(this.clouds, this.cloudsX2, this.cloudsY, this.cloudsW, this.cloudsH);
			context.drawImage(this.castle.animation[Math.floor(this.castle.currentFrame) % this.castle.numFrames], 490, 137);
		}
		if(screen.scene == "SPLASHSCREEN") {
			context.drawImage(this.pressSpace.animation[Math.floor(this.pressSpace.currentFrame) % this.pressSpace.numFrames], 0, 75);
			context.drawImage(this.logo, 0, 0);			
		}
		if(screen.scene == "OPTIONS"){
			context.drawImage(this.optionsContent, 0, 0);
		}
		if(screen.scene == "CREDITS"){
			context.drawImage(this.creditsContent, 0, 0);
		}
	}
}