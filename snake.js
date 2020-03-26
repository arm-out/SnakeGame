class Snake {

    constructor() {
        this.body = [];
        this.len = 1;
        this.body[0] = createVector(floor(w/2), floor(h/2));
        this.xdir = 0;
        this.ydir = 0;
    }

    setDir(x, y) {
        this.xdir = x;
        this.ydir = y;
    }

    update() {
        let head = this.body[this.len-1].copy();
        this.body.shift();
        head.x += this.xdir;
        head.y += this.ydir;
        this.body.push(head);
    }

    endGame() {
        let x = this.body[this.len-1].x;
        let y = this.body[this.len-1].y;

        if (x > w-1 || x < 0 || y > h-1 || y < 0) {
            return true;
        }

        for (let i = 0; i < this.len - 2; i++) {
            let part = this.body[1];
            if (part.x == x && part.y == y) {
                return true;
            }
        }
        
        return false;
    }

    eat(pos) {
        let x = this.body[this.len-1].x;
        let y = this.body[this.len-1].y;

        if (x == pos.x && y == pos.y) {
            this.grow();
            return true;
        }
    }

    grow() {
        let head = this.body[this.len-1].copy();
        this.len++;
        this.body.push(head);
    }

    show() {
        for (let i = 0; i < this.len; i++) {
            noStroke();
            fill(0);
            rect(this.body[i].x, this.body[i].y, 1, 1);
        }
        
    }
}