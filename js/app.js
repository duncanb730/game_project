var Speed = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) * dt;
};
// Enemies our player must avoid
var Enemy = function(x, y, sprite) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    // this.reset();
};
// Enemy.prototype.reset = function() {
//     this.x = x;
//     this.y = y;
// };

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.x = 202;
    this.y = 390;
    this.sprite = 'images/char-boy.png';
};
// var collide = function() {
//     if (Enemy.x && Enemy.y === Player.x && Player.y) {
//         Player.reset();
//     }
// };
// Player.prototype.collide = function() {
//     if (Enemy1.x && Enemy1.y === Player.x && Player.y) {
//         Player.reset();
//     }
//     if (Enemy2.x && Enemy2.y === Player.x && Player.y) {
//         Player.reset();
//     }
//     if (Enemy3.x && Enemy3.y === Player.x && Player.y) {
//         Player.reset();
//     }
//     if (Enemy4.x && Enemy4.y === Player.x && Player.y) {
//         Player.reset();
//     }
// };
Player.prototype.update = function() {
    
};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(movement) {
    if (direction === 'left' && this.x !== borders.left) {
        this.x -= 101;
    }
    if (direction === 'right' && this.x !== borders.right) {
        this.x += 101;
    }
    if (direction === 'down' && this.y !== borders.bottom) {
        this.y += 85;
    }
    if (direction === 'up') {
        this.y -= 85;
    } else if (direction === 'up' && this.y === 50) {
        this.reset();
    }
};
 var borders = {
    left: 0,
    right: 404,
    up: 50,
    bottom: 390
 };
 Player.prototype.reset = function(reset) {
    this.x = 202;
    this.y = 390;
 };
// Now instantiate your objects.
var enemy1 = new Enemy(-101, 55, 'images/enemy-bug.png');
var enemy2 = new Enemy(-101, 140, 'images/enemy-bug.png');
var enemy3 = new Enemy(-101, 225, 'images/enemy-bug.png');
var enemy4 = new Enemy(-101, 140, 'images/enemy-bug.png');
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
    allEnemies.push(enemy1);
    allEnemies.push(enemy2);
    allEnemies.push(enemy3);
    allEnemies.push(enemy4);

// Place the player object in a variable called player
var player = new Player(202, 390);
var allPlayers = [];
allPlayers.push(player);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
