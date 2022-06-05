const matrix = [];
var m = 30;
var side = 20;
for (let y = 0; y < m; y++) {
    matrix[y] = [];
    for (let x = 0; x < m; x++) {
        matrix[y][x] = Math.round(Math.random() * 2);
    }

}
// monsteri bazmacum trvac qanakov
let monstercount=25;
for (let i = 0; i < monstercount; i++) {

    let c = Math.round(Math.random() * (m - 1));
    let d = Math.round(Math.random() * (m - 1));
    matrix[c][d] =3;

}
//predatori bazmacum trvac qanakov
let predcount = 18;
for (let i = 0; i < predcount; i++) {

    let a = Math.round(Math.random() * (m - 1));
    let b = Math.round(Math.random() * (m - 1));
    matrix[a][b] = 4;

}
//bombi bazmacum trvac qanakov
let bombcount=10;
    for (let i = 0; i < bombcount; i++) {
        let e = Math.round(Math.random() * (m - 1));
        let f = Math.round(Math.random() * (m - 1));
        matrix[e][f] = 5;
        
    }


const grassArr = [];
const grassEaterArr = [];
const MonsterArr = [];
const PredatorArr = [];
const blockArr=[];


function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side + 1, matrix.length * side + 1);
    background('#acacac');

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y));
            }
            else if (matrix[y][x] == 2) {
                grassEaterArr.push(new GrassEater(x, y))
            }
            else if (matrix[y][x] == 3) {
                MonsterArr.push(new Monster(x, y))
            }
            else if (matrix[y][x] == 4) {
                PredatorArr.push(new Predator(x, y))
            }
            else if (matrix[y][x] == 5) {
                blockArr.push(new Blocks(x, y))
            }
        }
    }
}






function draw() {



    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("darkgreen");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("darkblue");
            }
 
            else if (matrix[y][x] == 4) {
                fill("red");
            }
            else if (matrix[y][x] == 5) {
                fill("black");
            }
            else {
                fill("#acacac");
            }

            rect(side * y, side * x, side, side);
        }
    }





    for (let gr in grassArr) {
        grassArr[gr].mul();
    }

    for (let gre in grassEaterArr) {
        grassEaterArr[gre].eat();
    }

    for (let mnstr in MonsterArr) {
        MonsterArr[mnstr].eat();
    }

    for (let pred in PredatorArr) {
        PredatorArr[pred].eat();
    }

    

}



console.log(grassArr);
console.log(grassEaterArr);
console.log(MonsterArr);
console.log(PredatorArr);