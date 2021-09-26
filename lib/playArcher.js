class Ground {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, this.w, this.h,options)
        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        if(keyIsDown(RIGHT_ARROW) && this.angle < 60) {
            this.angle += 1
        }
        if(keyIsDown(LEFT_ARROW) && this.angle > -59){
            this.angle-= 1
        }
        push();
        translate(pos.x,pos.y)
        imageMode(CENTER);
        stroke(255);
        fill("red");
        image(0,0, this.w, this.h);
        pop();
    }
}