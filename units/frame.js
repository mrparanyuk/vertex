// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/urR596FsU68

function Frame(x, y, w, options) {
    this.body = Bodies.circle(x, y, w, options);
    this.w = w;
    World.add(world, this.body);

    this.show = function() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        // rectMode(CENTER);
        strokeWeight(1);
        stroke(255);
        fill(255, 0,0);
        // opacity(1);
        circle(0, 0, this.w);
        noFill();
        pop();
    }

}
