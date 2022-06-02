
function preload() { 
	plz = loadModel('plz.obj',true)
}

var mode=1
		
	function setup() {
	createCanvas(windowWidth, windowHeight);
	background("#875053");
	frameRate(100);
	rectMode(CENTER);
}




function mousePressed(){
  mode=mode+1;
	background("#875053");
	createCanvas(windowWidth, windowHeight, WEBGL);//滑鼠按下的時候跑3D
	noFill();
}




function draw() {
	noFill();
	background("#875053");
	for(var x=0;x<width;x=x+60){//宣告x在寬運作
   for(var y =0;y<height;y=y+60){//宣告Y在寬運作
   var k = map(mouseX,0,width,0,30);//會跟著鼠標去改變
	ellipse(x+35,y+35,70*k);//圓形
		 stroke("#FFEED6")
	triangle(x+8*k,y+56*k,x+36*k,y+1*k,x+64*k,y+56*k);//三角形
		 stroke("#FBBFCA")
		rectMode(CENTER)
		rect(x+35,y+35,60*k)//方形
		 stroke("#D2BF55")
	 }
		
		 if (mode % 2==0){	//按滑鼠跑這個
	clear()//清除殘影
  background("#875053");
  model(plz)//叫出模組
	rotateZ(PI)//反轉z軸
	rotateY(frameCount * 0.1);//旋轉y軸
}
		
		
		
		
		  }
		 
    
   
 

}