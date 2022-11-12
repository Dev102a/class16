

function setup() 
{
  createCanvas(400, 400);
  box1 = new  Box()
  box2 = new Box()
}

function draw() 
{
  background(220);
  box1.show()
 box1.setSpeed(1) 

 box2.show()
 box2.setSpeed(-1)
}

