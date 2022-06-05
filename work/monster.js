

//monster

class Monster {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 10;

        this.directions = [
            [this.x - 1, this.y],
            [this.x - 2, this.y],
            [this.x - 2, this.y - 1],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x + 2, this.y - 1],
            [this.x, this.y - 1],
            [this.x, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y + 1],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2]
        ];
    }


    getNewCoordinates() {
        
        this.directions = [
        [this.x - 1, this.y - 1],
        [this.x, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y],
        [this.x + 1, this.y],
        [this.x - 1, this.y + 1],
        [this.x, this.y + 1],
        [this.x + 1, this.y + 1]
        ];
    }



    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }

    mul() {
        let found = this.chooseCell(0);
        let exact = random(found);

        if (exact && this.energy >= 8) {
            let x = exact[0];
            let y = exact[1];

            let monst = new Monster(x, y);
            matrix[y][x] = 3;
            MonsterArr.push(monst);

            this.energy = 5;
        }
        else {
            console.log("there is no way to multiply");
        }
    }




    eat() {
        let found = this.chooseCell(2);
        let exact = random(found);

        if (exact) {
            this.energy += 2;
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i < grassEaterArr.length; i++) {
                if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            if (this.energy >= 14) 
                this.mul();
        }
        else if (this.energy <= 0) {
            this.die();
        }
        else {
            this.move();
        }

    }
    move() {
        let found = this.chooseCell(0);
        let exact = random(found);

        if (exact) {
            let x = exact[0];
            let y = exact[1];
            
            
            this.energy--;

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            if (this.energy <= 0) {
                this.die();
            }

        }


        let found1 = this.chooseCell(1);
        let exact1 = random(found1);

        if (exact1) {
            let x1 = exact1[0];
            let y1 = exact1[1];
            
            
            this.energy-=2;

            matrix[y1][x1] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x1;
            this.y = y1;

            if (this.energy <= 0) {
                this.die();
            }

        }
    }

    die() {
        if (this.energy <= 0) {
            for (let i in MonsterArr) {
                if (MonsterArr[i].y == this.y && MonsterArr[i].x == this.x) {
                    MonsterArr.splice(i, 1);
                    break;
                }
            }
        }
        matrix[this.y][this.x] = 0;
    }


}

