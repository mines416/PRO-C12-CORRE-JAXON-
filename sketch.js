var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage de path (camino)
  pathImg=loadImage("path.png");
  boyImg=loadAnimation("Jake1.png", "Jake2.png");


  //loadAnimation de boy (niño)
 
}

function setup(){
  
  createCanvas(400,400);
 //crear sprite de path (camino) 
 path=createSprite(200,100);
 path.addImage(pathImg);
 path.scale=1.2;
 


//agregar imagen de path
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.


//crear sprite de boy (niño)
boy=createSprite(200,350);
boy.addAnimation("correr", boyImg);

//agregar animación para boy
boy.scale=0.5;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false;
////establecer visibilidad como false (falso) para límite izquierdo

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false;
//establecer visibilidad como false (falso) para límite izquierdo
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse

  boy.x=mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 

  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }

  
  
  drawSprites();
}
