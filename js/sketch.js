let juego= new Game();

let init = false;
function setup(){
	createCanvas(windowWidth,windowHeight);
}

function draw(){
	background('black');
	if(init){
		juego.display();
	}else{
		textSize(20);
		textAlign(CENTER);
		fill('white')
		text("Presiona ENTER para iniciar", width/2, height/2);
		text("W Movimiento arriba/S Movimiento abajo JUGADOR IZQUIERDA", width/2, height/2+30)
		text("FLECHA ARRIBA Movimiento arriba/FLECHA ABAJO Movimiento abajo JUGADOR DERECHA", width/2, height/2+60)
	}
			
}

function keyPressed(){
	if(keyCode===ENTER) init = true;
	/*if(keyCode === LEFT_ARROW) x-=3;
	else if(keyCode === RIGHT_ARROW) x+=3;*/
}

