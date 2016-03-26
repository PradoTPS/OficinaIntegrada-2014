function Bar(){
	this.map = new Image();
	this.map.src = "resources/images/gameplay/map/bar.png";
	this.mapX = 200;
	this.mapY = 0;
	this.mapW = 582;
	this.mapH = 102;
	
	this.playerMap = new Image();
	this.playerMap.src = "resources/images/gameplay/map/playerMap.png";
	this.playerMapX = 200;
	this.playerMapY = 0;
	this.playerMapW = 582;
	this.playerMapH = 102;
	this.playerMapSpeed = 0.88;
	
	this.update = function(){
		if((screen.scene == "LEVEL1" || screen.scene == "LEVEL2" || screen.scene == "LEVEL3") && runner.x >= 100 && !manager.pause) {
			this.playerMapX += this.playerMapSpeed;
		}
		
		if(this.playerMapX >= 704) {
			this.playerMapX = 704;
		}
		
		if(manager.winning){
			this.playerMapSpeed = 0;
			this.playerMapX = 704;
		} else {
			if(screen.scene == "LEVEL1"){
				this.playerMapSpeed = 0.88;
			}else if(screen.scene == "LEVEL2"){
				this.playerMapSpeed = 0.5;
			}else if(screen.scene == "LEVEL3"){
				this.playerMapSpeed = 0.38;
			}
		}
	}
	
	this.draw = function(){
		context.drawImage(this.map, this.mapX, this.mapY, this.mapW, this.mapH);
		context.drawImage(this.playerMap, this.playerMapX, this.playerMapY, this.playerMapW, this.playerMapH);
	}
}