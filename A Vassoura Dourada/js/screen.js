var Screen = function() {

	this.scene = "SPLASHSCREEN";
	
	this.MUSICA = true;
	this.WIN = false;
	this.PAUSE = false;
	this.PASSAR_LEVEL = false;
	this.FASE1 = true;
	this.FASE2 = false;
	this.FASE3 = false;
	
	this.deathToll = localStorage.getItem("mortes") === null ? 0 : localStorage.getItem("mortes");
	
	this.menu_fundo = new Image();
	this.menu_fundo.src = "IMAGEM/Menu/Fundo_Estatico.png";
	
	this.fundo_opcoes = new Image();
	this.fundo_opcoes.src = "IMAGEM/Menu/Tela_Instru.png";
	
	this.fundo_creditos = new Image();
	this.fundo_creditos.src = "IMAGEM/Menu/Tela_Cred.png";
	
	this.nuvens1 = new Image();
	this.nuvens1.src = "IMAGEM/Menu/Nuvens_Menu.png";
	this.nuvens2 = new Image();
	this.nuvens2.src = "IMAGEM/Menu/Nuvens_Menu.png";
	this.nuvens_x = -800;
	this.nuvens_y = 80;
	this.nuvens_w = 800;
	this.nuvens_h = 198;
	this.nuvens2_x = 0;
	this.nuvens2_y = 80;
	this.nuvens_speed = 2;
	
	this.update_nuvens = function() {
		this.nuvens_x += this.nuvens_speed;
		this.nuvens2_x += this.nuvens_speed;
		
		if (this.nuvens_x >= 800) {
		this.nuvens_x = -800;
		}

		if (this.nuvens2_x >= 800) {
			this.nuves2_x = -800;
		}
	}
	
	this.barra = new Image();
	this.barra.src = "IMAGEM/Jogo/Fundo/barra.png";
	this.barra_x = 200;
	this.barra_y = 0;
	this.barra_w = 582;
	this.barra_h = 102;
	
	this.pedro_barra = new Image();
	this.pedro_barra.src = "IMAGEM/Jogo/Fundo/pedro_barra.png";
	this.pedro_barra_x = 200;
	this.pedro_barra_y = 0;
	this.pedro_barra_w = 582;
	this.pedro_barra_h = 102;
	this.pedro_barra_speed = 0.88;
		
	this.montanha = new Image();
	this.montanha.src = "IMAGEM/Jogo/Fundo/montanha.png";
	this.montanha_x = 0;
	this.montanha_y = 0;
	this.montanha_w = 1600;
	this.montanha_h = 500;
	this.montanha2_x = 1600;
	this.montanha_speed = 4;
	
	this.background = new Image();
	this.background.src = "IMAGEM/Jogo/Fundo/Background.png";
	this.background_x = 0;
	this.background_y = 0;
	this.background_w = 1600;
	this.background_h = 500;
	this.background_speed = 7;
	
	this.lua = new Image();
	this.lua.src = "IMAGEM/Jogo/Fundo/lua.png";
	this.lua_x = 400;
	this.lua_y = 100;
	this.lua_w = 672;
	this.lua_h = 249;
	this.lua_speed = 0.5;
	
	this.background1 = new Image();
	this.background1.src = "IMAGEM/Jogo/Fundo/Sky_FASE1.png";
	this.background1_2 = new Image();
	this.background1_2.src = "IMAGEM/Jogo/Fundo/Sky_FASE1.png";
	this.background1_x = 0;
	this.background1_y = 0;
	this.background1_w = 1605;
	this.background1_h = 600;
	this.background1_x2 = 1600;
	this.background1_speed = 1.5;
	
	this.fundo_fase1 = new Image();
	this.fundo_fase1.src = "IMAGEM/Jogo/Fundo/Fundo2_Fase1.png";
	this.fundo_fase1_2 = new Image();
	this.fundo_fase1_2.src = "IMAGEM/Jogo/Fundo/Fundo2_Fase1.png";
	this.fundo_fase1_x = 0;
	this.fundo_fase1_y = 0;
	this.fundo_fase1_w = 1605;
	this.fundo_fase1_h = 600;
	this.fundo_fase1_x2 = 1600;
	this.fundo_fase1_speed = 3;
	
	this.fundo2_fase1 = new Image();
	this.fundo2_fase1.src = "IMAGEM/Jogo/Fundo/Fundo1_Fase1.png";
	this.fundo2_fase1_2 = new Image();
	this.fundo2_fase1_2.src = "IMAGEM/Jogo/Fundo/Fundo1_Fase1.png";
	this.fundo2_fase1_x = 0;
	this.fundo2_fase1_y = 0;
	this.fundo2_fase1_w = 1605;
	this.fundo2_fase1_h = 600;
	this.fundo2_fase1_x2 = 1600;
	this.fundo2_fase1_speed = 5;
	
	this.background2 = new Image();
	this.background2.src = "IMAGEM/Jogo/Fundo/Fundo1_fase2.png";
	this.background2_2 = new Image();
	this.background2_2.src = "IMAGEM/Jogo/Fundo/Fundo1_fase2.png";
	this.background2_x = 0;
	this.background2_y = 0;
	this.background2_w = 1605;
	this.background2_h = 600;
	this.background2_x2 = 1600;
	this.background2_speed = 1.5;
	
	this.fundo_fase2 = new Image();
	this.fundo_fase2.src = "IMAGEM/Jogo/Fundo/Fundo2_Fase2.png";
	this.fundo_fase2_2 = new Image();
	this.fundo_fase2_2.src = "IMAGEM/Jogo/Fundo/Fundo2_Fase2.png";
	this.fundo_fase2_x = 0;
	this.fundo_fase2_y = 0;
	this.fundo_fase2_w = 1605;
	this.fundo_fase2_h = 600;
	this.fundo_fase2_x2 = 1600;
	this.fundo_fase2_speed = 3;
	
	this.fundo2_fase2 = new Image();
	this.fundo2_fase2.src = "IMAGEM/Jogo/Fundo/Fundo3_Fase2.png";
	this.fundo2_fase2_2 = new Image();
	this.fundo2_fase2_2.src = "IMAGEM/Jogo/Fundo/Fundo3_Fase2.png";
	this.fundo2_fase2_x = 0;
	this.fundo2_fase2_y = 0;
	this.fundo2_fase2_w = 1605;
	this.fundo2_fase2_h = 600;
	this.fundo2_fase2_x2 = 1600;
	this.fundo2_fase2_speed = 5;
	
	this.chuva = new Image();
	this.chuva.src = "IMAGEM/Jogo/Fundo/Chuva.png";
	this.chuva_x = 0;
	this.chuva_y = 0;
	this.chuva_w = 3200;
	this.chuva_h = 1200;
	this.chuva_x2 = 3200;
	this.chuva_y2 = 0;
	this.chuva_speed_x = 40;
	
	this.update_background = function() {
		if(!this.PAUSE) {
		
			if(!this.WIN) {
				if(runner.x < 100) {
					runner.velocidade_cavalo = 10;
					this.montanha_speed = 0;
					this.lua_speed = 0;
					this.background_speed = 0;
				} else {
					runner.velocidade_cavalo = 7;
					this.montanha_speed = 4;
					this.lua_speed = 0.5;
					this.background_speed = 7;
				}
			}	
			
			if(!this.WIN) {
				if(runner.x < 100) {
					runner.velocidade_cavalo = 10;
					this.background1_speed = 0;
					this.fundo_fase1_speed = 0;
					this.fundo2_fase1_speed = 0;
				} else {
					runner.velocidade_cavalo = 7;
					this.background1_speed = 1.5;
					this.fundo_fase1_speed = 3;
					this.fundo2_fase1_speed = 5;
				}
			}
			
			if(!this.WIN) {
				if(runner.x < 100) {
					runner.velocidade_cavalo = 10;
					this.background2_speed = 0;
					this.fundo_fase2_speed = 0;
					this.fundo2_fase2_speed = 0;
				} else {
					runner.velocidade_cavalo = 7;
					this.background2_speed = 1.5;
					this.fundo_fase2_speed = 3;
					this.fundo2_fase2_speed = 5;
				}
			}
			
			this.background1_x -= this.background1_speed;
			this.background1_x2 -= this.background1_speed;
			this.fundo_fase1_x -= this.fundo_fase1_speed;
			this.fundo_fase1_x2 -= this.fundo_fase1_speed;
			this.fundo2_fase1_x -= this.fundo2_fase1_speed;
			this.fundo2_fase1_x2 -= this.fundo2_fase1_speed;
			
			this.background2_x -= this.background2_speed;
			this.background2_x2 -= this.background2_speed;
			this.fundo_fase2_x -= this.fundo_fase2_speed;
			this.fundo_fase2_x2 -= this.fundo_fase2_speed;
			this.fundo2_fase2_x -= this.fundo2_fase2_speed;
			this.fundo2_fase2_x2 -= this.fundo2_fase2_speed;
			this.chuva_x -= this.chuva_speed_x;
			this.chuva_x2 -= this.chuva_speed_x;
			
			this.background_x -= this.background_speed;
			this.montanha_x -= this.montanha_speed;
			this.montanha2_x -= this.montanha_speed;
			this.lua_x -= this.lua_speed;
		
			if (this.background1_x + this.background1_w <= 0) {
				this.background1_x = 1600;
			}
			if (this.background1_x2 + this.background1_w <= 0) {
				this.background1_x2 = 1600;
			}
			if (this.fundo_fase1_x + this.fundo_fase1_w <= 0) {
				this.fundo_fase1_x = 1600;
			}
			if (this.fundo_fase1_x2 + this.fundo_fase1_w <= 0) {
				this.fundo_fase1_x2 = 1600;
			}
			if (this.fundo2_fase1_x + this.fundo2_fase1_w <= 0) {
				this.fundo2_fase1_x = 1600;
			}
			if (this.fundo2_fase1_x2 + this.fundo2_fase1_w <= 0) {
				this.fundo2_fase1_x2 = 1600;
			}
			
			if (this.background2_x + this.background2_w <= 0) {
				this.background2_x = 1600;
			}
			if (this.background2_x2 + this.background2_w <= 0) {
				this.background2_x2 = 1600;
			}
			if (this.fundo_fase2_x + this.fundo_fase2_w <= 0) {
				this.fundo_fase2_x = 1600;
			}
			if (this.fundo_fase2_x2 + this.fundo_fase2_w <= 0) {
				this.fundo_fase2_x2 = 1600;
			}
			if (this.fundo2_fase2_x + this.fundo2_fase2_w <= 0) {
				this.fundo2_fase2_x = 1600;
			}
			if (this.fundo2_fase2_x2 + this.fundo2_fase2_w <= 0) {
				this.fundo2_fase2_x2 = 1600;
			}
			if (this.chuva_x + this.chuva_w <= 0) {
				this.chuva_x = 3200;
			}
			if (this.chuva_x2 + this.chuva_w <= 0) {
				this.chuva_x2 = 3200;
			}
			
			if (this.background_x <= -800) {
				this.background_x = 0;
			}	
			if (this.montanha_x + this.montanha_w <= 0) {
				this.montanha_x = 1600;
			}
			if (this.montanha2_x + this.montanha_w <= 0) {
				this.montanha2_x = 1600;
			}
		}
		
		if (this.WIN) {
			this.montanha_speed = 0;
			this.lua_speed = 0;
			this.background_speed = 0;
			
			this.background1_speed = 0;
			this.fundo_fase1_speed = 0;
			this.fundo2_fase1_speed = 0;
			
			this.background2_speed = 0;
			this.fundo_fase2_speed = 0;
			this.fundo2_fase2_speed = 0;
		}
		
		if(this.scene == "FASE1" && runner.x >= 100 && !screen.PAUSE) {
			this.pedro_barra_x += this.pedro_barra_speed;
		}
		
		if(this.scene == "FASE2" && runner.x >= 100 && !screen.PAUSE) {
			this.pedro_barra_x += this.pedro_barra_speed;
		}
		
		if(this.scene == "FASE3" && runner.x >= 100 && !screen.PAUSE) {
			this.pedro_barra_x += this.pedro_barra_speed;
		}
		
		if(this.pedro_barra_x >= 704) {
			this.pedro_barra_x = 704;
		}
		
		if(this.scene == "FASE1" && this.WIN){
			this.pedro_barra_speed = 0;
			this.pedro_barra_x = 704;
		} else {
			this.pedro_barra_speed = 0.88;
		}
		
		if(this.scene == "FASE2" && this.WIN){
			this.pedro_barra_speed = 0;
			this.pedro_barra_x = 704;
		} else {
			this.pedro_barra_speed = 0.5;
		}
		
		if(this.scene == "FASE3" && this.WIN){
			this.pedro_barra_speed = 0;
			this.pedro_barra_x = 704;
		} else {
			this.pedro_barra_speed = 0.38;
		}
		
		if(this.scene == "FASE1"){
			this.pedro_barra_speed = 0.88;
		}
		if(this.scene == "FASE2"){
			this.pedro_barra_speed = 0.5;
		}
		if(this.scene == "FASE3"){
			this.pedro_barra_speed = 0.38;
		}
		
	}
	
	this.floor1 = new Image();
	this.floor1.src = "IMAGEM/Jogo/Fundo/floor.png";
	this.floor2 = new Image();
	this.floor2.src = "IMAGEM/Jogo/Fundo/floor.png";
	this.floor_x = 0;
	this.floor_y = 500;
	this.floor_w = 1605;
	this.floor_h = 104;
	this.floor2_x = 1600;
	this.floor2_y = 500;
	this.floor_speed = 15;
	
	this.floor_fase1 = new Image();
	this.floor_fase1.src = "IMAGEM/Jogo/Fundo/Ground_Fase1.png";
	this.floor2_fase1 = new Image();
	this.floor2_fase1.src = "IMAGEM/Jogo/Fundo/Ground_Fase1.png";
	this.floor_fase1_x = 0;
	this.floor_fase1_y = 0;
	this.floor_fase1_w = 1605;
	this.floor_fase1_h = 600;
	this.floor2_fase1_x = 1600;
	this.floor_fase1_speed = 15;
	
	this.floor_fase2 = new Image();
	this.floor_fase2.src = "IMAGEM/Jogo/Fundo/Ground_Fase2.png";
	this.floor2_fase2 = new Image();
	this.floor2_fase2.src = "IMAGEM/Jogo/Fundo/Ground_Fase2.png";
	this.floor_fase2_x = 0;
	this.floor_fase2_y = 0;
	this.floor_fase2_w = 1605;
	this.floor_fase2_h = 600;
	this.floor2_fase2_x = 1600;
	this.floor_fase2_speed = 15;
	
	this.update_floor = function() {
		if(!this.PAUSE) {
		
			if(!this.WIN) {
				if(runner.x < 100) {
					this.floor_speed = 0;
				} else {
					this.floor_speed = 15;
				}
			}
			
			if(!this.WIN) {
				if(runner.x < 100) {
					this.floor_fase1_speed = 0;
				} else {
					this.floor_fase1_speed = 15;
				}
			}
			
			if(!this.WIN) {
				if(runner.x < 100) {
					this.floor_fase2_speed = 0;
				} else {
					this.floor_fase2_speed = 15;
				}
			}
			
			this.floor_fase1_x -= this.floor_fase1_speed;
			this.floor2_fase1_x -= this.floor_fase1_speed;
			
			if (this.floor_fase1_x + this.floor_fase1_w <= 0) {
				this.floor_fase1_x = 1600;
			}
			
			if (this.floor2_fase1_x + this.floor_fase1_w <= 0) {
				this.floor2_fase1_x = 1600;
			}
			
			this.floor_fase2_x -= this.floor_fase2_speed;
			this.floor2_fase2_x -= this.floor_fase2_speed;
			
			if (this.floor_fase2_x + this.floor_fase2_w <= 0) {
				this.floor_fase2_x = 1600;
			}
			
			if (this.floor2_fase2_x + this.floor_fase2_w <= 0) {
				this.floor2_fase2_x = 1600;
			}
			
			this.floor_x -= this.floor_speed;
			this.floor2_x -= this.floor_speed;
			
			if (this.floor_x + this.floor_w <= 0) {
				this.floor_x = 1600;
			}
			
			if (this.floor2_x + this.floor_w <= 0) {
				this.floor2_x = 1600;
			}
			
		}
		
		if(this.WIN) {
			this.floor_speed = 0;
			this.floor_fase1_speed = 0;
			this.floor_fase2_speed = 0;
		}
	}
	
	this.logo = new Image();
	this.logo.src = "IMAGEM/Menu/Fundo_Logo.png";
	
	this.tela_pause = new Image();
	this.tela_pause.src = "IMAGEM/Jogo/Pause/Tela_Pause.png";
	
	this.vassoura_x = 0;
	this.vassoura_y = -600;
	
	this.start = (new Date()).getTime();
	this.current;
	this.currentFrame = 0;
	this.currentFrame2 = 0;
	this.currentFrame3 = 0;
	this.currentFrame4 = 0;
	this.currentFrame5 = 0;
	
	this.castelo_animacao = new Array();
	this.numFrames_castelo = 2;
	this.space_animacao = new Array();
	this.numFrames_space = 13;
	this.loose_animacao = new Array();
	this.numFrames_loose = 9;
	this.vassoura_animacao = new Array();
	this.numFrames_vassoura = 15;
	this.fade_animacao = new Array();
	this.numFrames_fade = 25;
	
	
	this.castelo_x = 490;
	this.castelo_y = 137;
	
	for (var i = 0; i < this.numFrames_castelo; i++) {
		this.castelo_animacao[i] = new Image();
		this.castelo_animacao[i].src = "IMAGEM/Menu/Castelo/Castelo" + (i + 1) + ".png";
	}
	
	for (var i = 0; i < this.numFrames_space; i++) {
		this.space_animacao[i] = new Image();
		this.space_animacao[i].src = "IMAGEM/Menu/Press_Space/Espace_" + (i + 1) + ".png";
	}
	
	for (var i = 0; i < this.numFrames_loose; i++) {
		this.loose_animacao[i] = new Image();
		this.loose_animacao[i].src = "IMAGEM/Jogo/Loose/Tela_Lose_" + (i + 1) + ".png";
	}
	
	for (var i = 0; i < this.numFrames_vassoura; i++) {
		this.vassoura_animacao[i] = new Image();
		this.vassoura_animacao[i].src = "IMAGEM/Jogo/Win/Vassoura/vassoura" + (i + 1) + ".png";
	}
	
	for (var i = 0; i < this.numFrames_fade; i++) {
		this.fade_animacao[i] = new Image();
		this.fade_animacao[i].src = "IMAGEM/Jogo/Win/Ending/ending" + (i + 1) + ".png";
	}
		
	this.deltaTime = function() {
		this.current = (new Date()).getTime();
		this.elapsed = this.current - this.start;
		this.start = this.current;
		var delta = this.elapsed / 1000;
		return delta;
	}
	
	this.update_animacao = function() {
		var delta = this.deltaTime();
		this.currentFrame += delta * 4;
		
		this.currentFrame2 += delta * 8;
		
		this.currentFrame3 += delta * 10;
		
		this.currentFrame4 += delta * 10;
		
		if(screen.scene == "FASE3" && this.vassoura_y >= 0) {
			this.currentFrame5 += delta * 15;
		}
		
		if(screen.scene == "FASE1" && runner.x >= 840) {
			this.currentFrame5 += delta * 15;
		}
		
		if(screen.scene == "FASE2" && runner.x >= 840) {
			this.currentFrame5 += delta * 15;
		}
	}
	
	this.update_fade = function() {
		if(Math.floor(this.currentFrame5) % this.numFrames_fade == 24 && this.scene == "FASE1") {
			this.scene = "FASE2";
			this.WIN = false;
			this.currentFrame5 = 0;
			this.PASSAR_LEVEL = true;
		}
		
		if(Math.floor(this.currentFrame5) % this.numFrames_fade == 24 && this.scene == "FASE2") {
			this.scene = "FASE3";
			this.WIN = false;
			this.currentFrame5 = 0;
			this.PASSAR_LEVEL = true;
		}
		
		if(Math.floor(this.currentFrame5) % this.numFrames_fade == 24 && this.scene == "FASE3") {
			this.scene = "MENU";
			this.WIN = false;
			this.currentFrame5 = 0;
			this.PASSAR_LEVEL = true;
		}
	}
	
	this.update_vassoura = function() {
		if (runner.x >= 337 && this.scene == "FASE3") {
			this.vassoura_y += 10;
		}
				
		if(this.vassoura_y >= 0) {
			this.vassoura_y = 0;
		}
				
		if(this.scene == "MENU") {
			this.vassoura_y = -600;
		}	
	}
		
	
	this.botao_musica_x = 10;
	this.botao_musica_y = 10;
	this.botao_musica_w = 54;
	this.botao_musica_h = 57;
	this.botao_musica_on = new Image();
	this.botao_musica_on.src = "IMAGEM/Botoes/som_on.png";
	this.botao_musica_off = new Image();
	this.botao_musica_off.src = "IMAGEM/Botoes/som_off.png";
	
	this.botao_opcoes_x = 55;
	this.botao_opcoes_y = 436;
	this.botao_opcoes_w = 208;
	this.botao_opcoes_h = 109;
	this.botao_opcoes = new Image();
	this.botao_opcoes.src = "IMAGEM/Botoes/Icon_Instru.png";

	this.botao_creditos_x = 537;
	this.botao_creditos_y = 436;
	this.botao_creditos_w = 208;
	this.botao_creditos_h = 109;
	this.botao_creditos = new Image();
	this.botao_creditos.src = "IMAGEM/Botoes/Icon_Cred.png";

	this.botao_play_x = 288;
	this.botao_play_y = 150;
	this.botao_play_w = 224;
	this.botao_play_h = 222;
	this.botao_play = new Image();
	this.botao_play.src = "IMAGEM/Botoes/Icon_Play.png";
	
	this.botao_voltar_x = 572;
	this.botao_voltar_y = 20;
	this.botao_voltar_w = 208;
	this.botao_voltar_h = 109;
	this.botao_voltar = new Image();
	this.botao_voltar.src = "IMAGEM/Botoes/Icon_Voltar.png";
	
	this.botao_loose_sair_x = 100;
	this.botao_loose_sair_y = 436;
	this.botao_loose_sair_w = 208;
	this.botao_loose_sair_h = 109;
	this.botao_loose_sair = new Image();
	this.botao_loose_sair.src = "IMAGEM/Botoes/Icon_Menu.png";
		
	this.botao_loose_voltar_x = 492;
	this.botao_loose_voltar_y = 436;
	this.botao_loose_voltar_w = 208;
	this.botao_loose_voltar_h = 109;
	this.botao_loose_voltar = new Image();
	this.botao_loose_voltar.src = "IMAGEM/Botoes/Icon_Recomecar.png";
	
	this.botao_pause_sair_x = 296;
	this.botao_pause_sair_y = 250;
	this.botao_pause_sair_w = 208;
	this.botao_pause_sair_h = 109;
	this.botao_pause_sair = new Image();
	this.botao_pause_sair.src = "IMAGEM/Botoes/Icon_Menu.png";
	
	this.menu_audio = new Audio();
	this.menu_audio.src = "AUDIO/Menu/Menu.wav";
	this.botao_audio = new Audio();
	this.botao_audio.src = "AUDIO/Botoes/Click.wav";
	this.loose_audio = new Audio();
	this.loose_audio.src = "AUDIO/Jogo/Morreu/Perdeu.mp3";
	this.win_audio = new Audio();
	this.win_audio.src = "AUDIO/Jogo/Ganhou/Ganhou.mp3";
	this.win_audio2 = new Audio();
	this.win_audio2.src = "AUDIO/Jogo/Ganhou/Ganhou2.mp3";
	this.jogo_audio = new Audio();
	this.jogo_audio.src = "AUDIO/Jogo/Som_Ambiente/Fase.mp3";
	this.bateu_audio = new Audio();
	this.bateu_audio.src = "AUDIO/Jogo/Morreu/bateu.mp3";
	this.fase1_musica = new Audio();
	this.fase1_musica.src = "AUDIO/Jogo/Som_Ambiente/fase1_musica.mp3";
	this.fase2_musica = new Audio();
	this.fase2_musica.src = "AUDIO/Jogo/Som_Ambiente/fase2_musica.mp3";
	this.fase2_audio = new Audio();
	this.fase2_audio.src = "AUDIO/Jogo/Som_Ambiente/fase2_chuva.mp3";
	this.pause_click_audio = new Audio();
	this.pause_click_audio.src = "AUDIO/Jogo/Pause/pause_click.mp3";
	this.cavalo_morreu_audio = new Audio();
	this.cavalo_morreu_audio.src = "AUDIO/Jogo/Morreu/Cavalo_morreu.wav";
	this.cavalo_audio = new Audio();
	this.cavalo_audio.src = "AUDIO/Jogo/Cavalo/Cavalo_Som.mp3";
	this.espadada_erro_audio = new Audio();
	this.espadada_erro_audio.src = "AUDIO/Jogo/Espadada/espada_erro.mp3";
	this.espadada_audio = new Audio();
	this.espadada_audio.src = "AUDIO/Jogo/Espadada/espadada.mp3";
	this.morcego_audio = new Audio();
	this.morcego_audio.src = "AUDIO/Jogo/Morreu/morcego.mp3";
	this.morcego_morto_audio = new Audio();
	this.morcego_morto_audio.src = "AUDIO/Jogo/Espadada/morcego_morto.mp3";
	this.cavalo_pulo_audio = new Audio();
	this.cavalo_pulo_audio.src = "AUDIO/Jogo/Cavalo/pulo_cavalo.mp3";
	
	this.update = function() {
		this.update_animacao();
		this.update_nuvens();
		this.update_background();
		this.update_floor();
		this.update_vassoura();
		this.update_fade();
		if(this.scene == "FASE1") {
			this.FASE1 = true;
		}
		if(this.scene == "FASE2") {
			this.FASE2 = true;
		}
		if(this.scene == "FASE3") {
			this.FASE3 = true;
		}
	}
	
	this.draw = function() {
		if(this.scene == "SPLASHSCREEN") {
			context.clearRect(0,0,canvas.width,canvas.height);
			context.drawImage(this.menu_fundo, 0, 0, canvas.width, canvas.height);
			context.drawImage(this.nuvens1, this.nuvens_x, this.nuvens_y, this.nuvens_w, this.nuvens_h);
			context.drawImage(this.nuvens2, this.nuvens2_x, this.nuvens2_y, this.nuvens_w, this.nuvens_h);
			context.drawImage(this.castelo_animacao[Math.floor(this.currentFrame) % this.numFrames_castelo], this.castelo_x, this.castelo_y);
			context.drawImage(this.space_animacao[Math.floor(this.currentFrame2) % this.numFrames_space], 0, 75);
			context.drawImage(this.logo, 0, 0);			
		}
		if (this.scene =='MENU'){
			context.clearRect(0,0,canvas.width,canvas.height);
			context.drawImage(this.menu_fundo, 0, 0, canvas.width, canvas.height);
			context.drawImage(this.nuvens1, this.nuvens_x, this.nuvens_y, this.nuvens_w, this.nuvens_h);
			context.drawImage(this.nuvens2, this.nuvens2_x, this.nuvens2_y, this.nuvens_w, this.nuvens_h);
			context.drawImage(this.castelo_animacao[Math.floor(this.currentFrame) % this.numFrames_castelo], this.castelo_x, this.castelo_y);
			context.drawImage(this.botao_opcoes, this.botao_opcoes_x, this.botao_opcoes_y, this.botao_opcoes_w, this.botao_opcoes_h);
			context.drawImage(this.botao_creditos, this.botao_creditos_x, this.botao_creditos_y, this.botao_creditos_w, this.botao_creditos_h);
			context.drawImage(this.botao_play, this.botao_play_x, this.botao_play_y, this.botao_play_w, this.botao_play_h);
			if(this.MUSICA) {
				context.drawImage(this.botao_musica_on, this.botao_musica_x, this.botao_musica_y, this.botao_musica_w, this.botao_musica_h);
			} else {
				context.drawImage(this.botao_musica_off, this.botao_musica_x, this.botao_musica_y, this.botao_musica_w, this.botao_musica_h);
			}
		}
		if (this.scene =='OPCOES'){
			context.clearRect(0,0,canvas.width,canvas.height);
			context.drawImage(this.menu_fundo, 0, 0, canvas.width, canvas.height);
			context.drawImage(this.nuvens1, this.nuvens_x, this.nuvens_y, this.nuvens_w, this.nuvens_h);
			context.drawImage(this.nuvens2, this.nuvens2_x, this.nuvens2_y, this.nuvens_w, this.nuvens_h);
			context.drawImage(this.castelo_animacao[Math.floor(this.currentFrame) % this.numFrames_castelo], this.castelo_x, this.castelo_y);
			context.drawImage(this.fundo_opcoes, 0, 0);
			context.drawImage(this.botao_voltar, this.botao_voltar_x, this.botao_voltar_y, this.botao_voltar_w, this.botao_voltar_h);
		}
		if (this.scene == 'CREDITOS'){
			context.clearRect(0,0,canvas.width,canvas.height);
			context.drawImage(this.menu_fundo, 0, 0, canvas.width, canvas.height);
			context.drawImage(this.nuvens1, this.nuvens_x, this.nuvens_y, this.nuvens_w, this.nuvens_h);
			context.drawImage(this.nuvens2, this.nuvens2_x, this.nuvens2_y, this.nuvens_w, this.nuvens_h);
			context.drawImage(this.fundo_creditos, 0, 0);
			context.drawImage(this.castelo_animacao[Math.floor(this.currentFrame) % this.numFrames_castelo], this.castelo_x, this.castelo_y);
			context.drawImage(this.botao_voltar, this.botao_voltar_x, this.botao_voltar_y, this.botao_voltar_w, this.botao_voltar_h);
		}
		if (this.scene == 'FASE1'){
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.drawImage(this.background1, this.background1_x, this.background1_y, this.background1_w, this.background1_h);
			context.drawImage(this.background1_2, this.background1_x2, this.background1_y, this.background1_w, this.background1_h);
			context.drawImage(this.fundo_fase1, this.fundo_fase1_x, this.fundo_fase1_y, this.fundo_fase1_w, this.fundo_fase1_h);
			context.drawImage(this.fundo_fase1_2, this.fundo_fase1_x2, this.fundo_fase1_y, this.fundo_fase1_w, this.fundo_fase1_h);
			context.drawImage(this.fundo2_fase1, this.fundo2_fase1_x, this.fundo2_fase1_y, this.fundo2_fase1_w, this.fundo2_fase1_h);
			context.drawImage(this.fundo2_fase1_2, this.fundo2_fase1_x2, this.fundo2_fase1_y, this.fundo2_fase1_w, this.fundo2_fase1_h);
			context.drawImage(this.floor_fase1, this.floor_fase1_x, this.floor_fase1_y, this.floor_fase1_w, this.floor_fase1_h);
			context.drawImage(this.floor2_fase1, this.floor2_fase1_x, this.floor_fase1_y, this.floor_fase1_w, this.floor_fase1_h);
			context.drawImage(this.barra, this.barra_x, this.barra_y, this.barra_w, this.barra_h);
			context.drawImage(this.pedro_barra, this.pedro_barra_x, this.pedro_barra_y, this.pedro_barra_w, this.pedro_barra_h);
			context.fillStyle = "WHITE";
			context.font = "30px Arial";
			context.fillText("Mortes: " + this.deathToll, 40, 57);
			
			runner.draw();
			
			for (var a in n_arbusto) {
				n_arbusto[a].draw();
			}
			
			if (this.WIN) {
				if(runner.x >= 840) {
					context.drawImage(this.fade_animacao[Math.floor(this.currentFrame5) % this.numFrames_fade], 0, 0);
				}
			}
		}
		if (this.scene == 'FASE2'){
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.drawImage(this.background2, this.background2_x, this.background2_y, this.background2_w, this.background2_h);
			context.drawImage(this.background2_2, this.background2_x2, this.background2_y, this.background2_w, this.background2_h);
			context.drawImage(this.fundo_fase2, this.fundo_fase2_x, this.fundo_fase2_y, this.fundo_fase2_w, this.fundo_fase2_h);
			context.drawImage(this.fundo_fase2_2, this.fundo_fase2_x2, this.fundo_fase2_y, this.fundo_fase2_w, this.fundo_fase2_h);
			context.drawImage(this.fundo2_fase2, this.fundo2_fase2_x, this.fundo2_fase2_y, this.fundo2_fase2_w, this.fundo2_fase2_h);
			context.drawImage(this.fundo2_fase2_2, this.fundo2_fase2_x2, this.fundo2_fase2_y, this.fundo2_fase2_w, this.fundo2_fase2_h);
			context.drawImage(this.chuva, this.chuva_x, this.chuva_y, this.chuva_w, this.chuva_h);
			context.drawImage(this.chuva, this.chuva_x2, this.chuva_y2, this.chuva_w, this.chuva_h);
			context.drawImage(this.floor_fase2, this.floor_fase2_x, this.floor_fase2_y, this.floor_fase2_w, this.floor_fase2_h);
			context.drawImage(this.floor2_fase2, this.floor2_fase2_x, this.floor_fase2_y, this.floor_fase2_w, this.floor_fase2_h);
			context.drawImage(this.barra, this.barra_x, this.barra_y, this.barra_w, this.barra_h);
			context.drawImage(this.pedro_barra, this.pedro_barra_x, this.pedro_barra_y, this.pedro_barra_w, this.pedro_barra_h);
			context.fillStyle = "WHITE";
			context.font = "30px Arial";
			context.fillText("Mortes: " + this.deathToll, 40, 57);
			
			runner.draw();
			
			for (var p in n_pedra) {
				n_pedra[p].draw();
			}
			
			for (var m in n_morcego2) {
				n_morcego2[m].draw();
			}
			
			if (this.WIN) {
				if(runner.x >= 840) {
					context.drawImage(this.fade_animacao[Math.floor(this.currentFrame5) % this.numFrames_fade], 0, 0);
				}
			}
		}
		if (this.scene == 'FASE3'){
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.drawImage(this.montanha, this.montanha_x, this.montanha_y, this.montanha_w, this.montanha_h);
			context.drawImage(this.montanha, this.montanha2_x, this.montanha_y, this.montanha_w, this.montanha_h);
			context.drawImage(this.lua, this.lua_x, this.lua_y, this.lua_w, this.lua_h);
			context.drawImage(this.background, this.background_x, this.background_y, this.background_w, this.background_h);
			context.drawImage(this.floor1, this.floor_x, this.floor_y, this.floor_w, this.floor_h);
			context.drawImage(this.floor2, this.floor2_x, this.floor2_y, this.floor_w, this.floor_h);
			context.fillStyle = "WHITE";
			context.font = "30px Arial";
			context.fillText("Mortes: " + this.deathToll, 40, 57);
			
			runner.draw();
			
			for (var b in n_barril) {
				n_barril[b].draw();
			}
			
			for (var m in n_morcego) {
				n_morcego[m].draw();
			}
			
			if (this.WIN) {
				context.drawImage(this.vassoura_animacao[Math.floor(this.currentFrame4) % this.numFrames_vassoura], this.vassoura_x, this.vassoura_y);
			}
			
			context.drawImage(this.barra, this.barra_x, this.barra_y, this.barra_w, this.barra_h);
			context.drawImage(this.pedro_barra, this.pedro_barra_x, this.pedro_barra_y, this.pedro_barra_w, this.pedro_barra_h);
			
			if(this.vassoura_y >= 0) {
				context.drawImage(this.fade_animacao[Math.floor(this.currentFrame5) % this.numFrames_fade], 0, 0);
			}
		}
		if (this.scene == 'PAUSE'){
			context.clearRect(0, 0, canvas.width, canvas.height);
		}
		if (this.scene == 'LOOSE'){
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.drawImage(this.loose_animacao[Math.floor(this.currentFrame3) % this.numFrames_loose], 0, 0);
			context.drawImage(this.botao_loose_sair, this.botao_loose_sair_x, this.botao_loose_sair_y, this.botao_loose_sair_w, this.botao_loose_sair_h);
			context.drawImage(this.botao_loose_voltar, this.botao_loose_voltar_x, this.botao_loose_voltar_y, this.botao_loose_voltar_w, this.botao_loose_voltar_h);
		}
		if (this.PAUSE) {
			context.drawImage(this.tela_pause, 0, 0, canvas.width, canvas.height);
			context.drawImage(this.botao_pause_sair, this.botao_pause_sair_x, this.botao_pause_sair_y, this.botao_pause_sair_w, this.botao_pause_sair_h);
		
			if(this.MUSICA) {
				context.drawImage(this.botao_musica_on, this.botao_musica_x, this.botao_musica_y, this.botao_musica_w, this.botao_musica_h);
			} else {
				context.drawImage(this.botao_musica_off, this.botao_musica_x, this.botao_musica_y, this.botao_musica_w, this.botao_musica_h);
			}
		}
		if(this.MUSICA) {
			if (this.scene == "SPLASHSCREEN" || this.scene == "MENU" || this.scene == "OPCOES" || this.scene == "CREDITOS") {
				this.menu_audio.play();
			} else {
				this.menu_audio.pause();
			}
			if (this.scene == "LOOSE") {
				this.loose_audio.play();
			} else {
				this.loose_audio.pause();
			}
			if (this.scene == "FASE3" && !screen.WIN) {
				this.jogo_audio.play();
			} else {
				this.jogo_audio.pause();
			}
			if(runner.caseJump && this.scene == "FASE3" && !screen.PAUSE) {
				this.cavalo_audio.play();
			} else {
				this.cavalo_audio.pause();
			}
			if (this.scene == "FASE2" && !screen.WIN) {
				this.fase2_audio.play();
				this.fase2_musica.play();
			} else {
				this.fase2_audio.pause();
				this.fase2_musica.pause();
			}
			if (this.scene == "FASE1" && !screen.WIN) {
				this.fase1_musica.play();
			} else {
				this.fase1_musica.pause();
			}
			if (screen.scene == "FASE1" && screen.WIN || screen.scene == "FASE2" && screen.WIN) {
				this.win_audio.play();
			} else {
				this.win_audio.pause();
			}
			if (screen.scene == "FASE3" && screen.WIN) {
				this.win_audio2.play();
			} else {
				this.win_audio2.pause();
			}
			this.win_audio2
			if (this.scene == "FASE3" && runner.x >= 337) {
				this.cavalo_audio.pause();
			}
		} else {
			this.menu_audio.pause();
			this.fase2_audio.pause();
			this.fase1_musica.pause();
			this.jogo_audio.pause();	
		}
	}
}