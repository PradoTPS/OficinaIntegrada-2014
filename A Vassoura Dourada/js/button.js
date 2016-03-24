function CommomButton(x, y, imageSrc, here, next){
	this.x = x;
	this.y = y;
	this.w = 208;
	this.h = 109;
	this.image = new Image();
	this.image.src = "IMAGEM/Botoes/" + imageSrc + ".png";
	
	this.draw = function(){
		context.drawImage(this.image, this.x, this.y, this.w, this.h);
	}
	
	this.mouseOver = function(e){
		if(here == "PAUSE"){
			if(manager.pause){
				this.innitialX = x;
				this.innitialY = y;
				this.innitialW = 208;
				this.innitialH = 109;
				
				if ((e.x - canvas.offsetLeft > this.x) && (e.x - canvas.offsetLeft < this.x + this.w) &&
					(e.y > this.y) && (e.y < this.y + this.h)) {
					this.x = this.innitialX - 5;
					this.y = this.innitialY - 5;
					this.w = this.innitialW + 10;
					this.h = this.innitialH + 10;		
				} else {
					this.x = this.innitialX;
					this.y = this.innitialY;
					this.w = this.innitialW;
					this.h = this.innitialH;
				}
			}
		} else {
			if(screen.scene == here){
				this.innitialX = x;
				this.innitialY = y;
				this.innitialW = 208;
				this.innitialH = 109;
				
				if ((e.x - canvas.offsetLeft > this.x) && (e.x - canvas.offsetLeft < this.x + this.w) &&
					(e.y > this.y) && (e.y < this.y + this.h)) {
					this.x = this.innitialX - 5;
					this.y = this.innitialY - 5;
					this.w = this.innitialW + 10;
					this.h = this.innitialH + 10;		
				} else {
					this.x = this.innitialX;
					this.y = this.innitialY;
					this.w = this.innitialW;
					this.h = this.innitialH;
				}
			}
		}
	}
	
	this.click = function(e){
		if(here == "PAUSE"){
			if (manager.pause) {
				if ((e.x - canvas.offsetLeft > this.x) && (e.x - canvas.offsetLeft < this.x + this.w) &&
					(e.y > this.y) && (e.y < this.y + this.h)) {
					screen.scene = next;
					manager.pause = false;
					
					if(manager.soundOn) {
						screen.botao_audio.play();
					}
				}
			}
		} else {
			if (screen.scene == here) {
				if ((e.x - canvas.offsetLeft > this.x) && (e.x - canvas.offsetLeft < this.x + this.w) &&
					(e.y > this.y) && (e.y < this.y + this.h)) {
					if(next == "CURRENTLEVEL"){
						if(manager.currentLevel == "levelOne"){
							screen.scene = "LEVEL1";
						} else if(manager.currentLevel == "levelTwo"){
							screen.scene = "LEVEL2";
						} else if(manager.currentLevel == "levelThree"){
							screen.scene = "LEVEL3";
						}
					} else {
						screen.scene = next;
					}
					
					if(manager.soundOn) {
						screen.botao_audio.play();
					}
				}
			}
		}
	}
}

function DifferentButton(x, y, w, h, imageSrc, here, next){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.image = new Image();
	this.image.src = "IMAGEM/Botoes/" + imageSrc + ".png";
	
	this.draw = function(){
		context.drawImage(this.image, this.x, this.y, this.w, this.h);
	}
	
	this.mouseOver = function(e){
		if(screen.scene == here){
			this.innitialX = x;
			this.innitialY = y;
			this.innitialW = w;
			this.innitialH = h;
			
			if ((e.x - canvas.offsetLeft > this.x) && (e.x - canvas.offsetLeft < this.x + this.w) &&
				(e.y > this.y) && (e.y < this.y + this.h)) {
				this.x = this.innitialX - 5;
				this.y = this.innitialY - 5;
				this.w = this.innitialW + 10;
				this.h = this.innitialH + 10;	
			} else {
				this.x = this.innitialX;
				this.y = this.innitialY;
				this.w = this.innitialW;
				this.h = this.innitialH;
			}
		}
	}
	
	this.click = function(e){
		if (screen.scene == here) {
			if ((e.x - canvas.offsetLeft > this.x) && (e.x - canvas.offsetLeft < this.x + this.w) &&
				(e.y > this.y) && (e.y < this.y + this.h)) {
				screen.scene = next;
				
				if(manager.soundOn) {
					screen.botao_audio.play();
				}
			}
		}
	}
}

function SoundButton(x, y, w, h, imageSrc, imageSrcOff, here){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = y;
	this.imageOn = new Image();
	this.imageOn.src = "IMAGEM/Botoes/" + imageSrc + ".png";
	this.imageOff = new Image();
	this.imageOff.src = "IMAGEM/Botoes/" + imageSrcOff + ".png";
	
	this.draw = function(){
		if(manager.soundOn){
			context.drawImage(this.imageOn, this.x, this.y, this.w, this.h);
		} else {
			context.drawImage(this.imageOff, this.x, this.y, this.w, this.h);
		}
	}
	
	this.mouseOver = function(e){
		if(screen.scene == here || manager.pause){
			this.innitialX = x;
			this.innitialY = y;
			this.innitialW = w;
			this.innitialH = h;
			
			if ((e.x - canvas.offsetLeft > this.x) && (e.x - canvas.offsetLeft < this.x + this.w) &&
				(e.y > this.y) && (e.y < this.y + this.h)) {
				this.x = this.innitialX - 5;
				this.y = this.innitialY - 5;
				this.w = this.innitialW + 10;
				this.h = this.innitialH + 10;	
			} else {
				this.x = this.innitialX;
				this.y = this.innitialY;
				this.w = this.innitialW;
				this.h = this.innitialH;
			}
		}
	}
	
	this.click = function(e){
		if (screen.scene == here || manager.pause) {
			if ((e.x - canvas.offsetLeft > this.x) && (e.x - canvas.offsetLeft < this.x + this.w) &&
				(e.y > this.y) && (e.y < this.y + this.h)) {
				manager.soundOn = !manager.soundOn;
				
				if(manager.soundOn) {
					screen.botao_audio.play();
				}
			}
		}
	}
}