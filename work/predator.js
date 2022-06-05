class Predator {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 10;

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y + 1],
            [this.x + 1, this.y + 1],
        ];
    }


    getNewCoordinates() {

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y + 1],
            [this.x + 1, this.y + 1],
        ];
    }



    chooseCell(character) {
        this.getNewCoordinates()
        let found = [];
        for (var i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }
    // mul() {
    //     let found = this.chooseCell(0);
    //     let exact = random(found);

    //     if (exact && this.energy >= 12) {
    //         let x = exact[0];
    //         let y = exact[1];

    //         let pred = new Predator(x, y);
    //         matrix[y][x] = 4;
    //         PredatorArr.push(pred);

    //         this.energy = 7;
    //     }
    //     // else {
    //     //     console.log("there is no way to multiply");
    //     // }
    // }


   
    eat() {
        let found = this.chooseCell(3);
        let exact = random(found);

        if (exact) {
            this.energy += 2;
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i < MonsterArr.length; i++) {
                if (MonsterArr[i].x == x && MonsterArr[i].y == y) {
                    MonsterArr.splice(i, 1);
                    break;
                }
            }
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            // if (this.energy >= 10)
            //     this.mul();
        }
        else if (this.energy <= 0) {
            this.die();
        }
        else {
            this.move();
        }



        
        let found2 = this.chooseCell(1);
        let exact2 = random(found2);


        if (exact2) {
            this.energy += 5;
            let x = exact2[0];
            let y = exact2[1];

            for (let i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1);
                }

            }
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            // if (this.energy >= 10) {
            //     this.mul();
            // }
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
            this.energy--;
            let x = exact[0];
            let y = exact[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            if (this.energy <= 0) {
                this.die();
            }
        }

        let found2 = this.chooseCell(1);
        let exact2 = random(found2);
        if (exact2) {
            this.energy--;
            let x = exact2[0];
            let y = exact2[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 1;

            this.x = x;
            this.y = y;

            if (this.energy <= 0) {
                this.die();
            }
        }






    }
    die() {
        if (this.energy <= 0) {

            for (var i in PredatorArr) {
                if (PredatorArr[i].y == this.y && PredatorArr[i].x == this.x) {
                    PredatorArr.splice(i, 1);
                    break;
                }
            }

            matrix[this.y][this.x] = 0
        }
    }






}