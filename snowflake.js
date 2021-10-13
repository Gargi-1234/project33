class Snowflake {
    constructor(x, y) {
        var options = {
            'friction':0.9,
            'density' : 0.0000001,
            'frictionAir' : 0.1
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("snow.png")
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r, this.r);
       
        pop();
    }

};