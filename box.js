class Box_1{
      constructor(x,y,w,h){
          var options={
              isStatic: false,
              restitution: 0.2
          }
          this.x = x;
          this.y = y;
          this.w = w;
          this.h = h;
          this.box1 = Bodies.rectangle(this.x,this.y,this.w,this.h,options);
          World.add(world,this.box1);
      }
      display(){
          push()
          var box1pos = this.box1.position; 
          translate(box1pos.x,box1pos.y);
          
          rectMode(CENTER);
          fill("blue");
          rect(0,0,this.w,this.h);
          pop()
      }
}
class Box_2{
    constructor(x,y,w,h){
        var options={
            isStatic: false,
            restitution: 0.2
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.box2 = Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        World.add(world,this.box2);
    }
    display(){
        push()
        var box2pos = this.box2.position; 
        translate(box2pos.x,box2pos.y);
        
        rectMode(CENTER);
        fill("green");
        rect(0,0,this.w,this.h);
        pop()
    }
}

class Box_3{
    constructor(x,y,w,h){
        var options={
            isStatic: false,
            restitution: 0.2
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.box3 = Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        World.add(world,this.box3);
    }
    display(){
        push()
        var box3pos = this.box3.position; 
        translate(box3pos.x,box3pos.y);
        
        rectMode(CENTER);
        fill("pink");
        rect(0,0,this.w,this.h);
        pop()
    }
}

class Box_4{
    constructor(x,y,w,h){
        var options={
            isStatic: false,
            restitution: 0.2
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.box4 = Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        World.add(world,this.box4);
    }
    display(){
        push()
        var box4pos = this.box4.position; 
        translate(box4pos.x,box4pos.y);
        
        rectMode(CENTER);
        fill("yellow");
        rect(0,0,this.w,this.h);
        pop()
    }
}