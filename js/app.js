var Speed = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
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
    this.speed = Speed(65, 250);
};
 var EnemyRev = function(x, y, sprite) {
    this.sprite = 'images/enemy-bug2.png';
    this.x = x;
    this.y = y;
    this.speed = Speed(65, 250);
 };
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if ( this.x < 808) {
        this.x += this.speed * dt;
    } else {
        this.x = 0;
    }
};
EnemyRev.prototype.update = function(dt) {
    if ( this.x < 808) {
        this.x -= this.speed * dt;
    } else {
        this.x = 808;
    }
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// EnemyRev.prototype.render = function() {
//     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
// };
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
//     allEnemies.forEach(function(enemy) {
//         if (Math.abs (enemy.x - Player.x) < 50 && (enemy.y - Player.y) < 50) {
//             this.reset();
//         }
//     });
// };

Player.prototype.update = function() {
    var self = this;
    allEnemies.forEach(function(enemy) {
        if (Math.abs(enemy.x - self.x) < 50 && Math.abs(enemy.y - self.y) < 50) {
            self.reset();
        }
    });
};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {
    if (direction === 'left' && this.x !== borders.left) {
        this.x -= 101;
    }
    if (direction === 'right' && this.x !== borders.right) {
        this.x += 101;
    }
    if (direction === 'down' && this.y !== borders.bottom) {
        this.y += 85;
    }
    if (direction === 'up' && this.y > 100) {
        this.y -= 85;
    } else if (direction === 'up' && this.y <= 100) {
        this.reset();
    }
};
 var borders = {
    left: 0,
    right: 707,
    up: 50,
    bottom: 390
 };
 Player.prototype.reset = function(reset) {
    this.x = 202;
    this.y = 390;
 };
// Now instantiate your objects.
var enemy1 = new Enemy(-101, 55, 'images/enemy-bug.png');
var enemy2 = new EnemyRev(808, 140, 'images/enemy-bug2.png');
var enemy3 = new Enemy(-101, 225, 'images/enemy-bug.png');
var enemy4 = new EnemyRev(808, 140, 'images/enemy-bug2.png');
var enemy5 = new Enemy(-101, 55, 'images/enemy-bug.png');
var enemy6 = new Enemy(-101, 225, 'images/enemy-bug.png');

// Place all enemy objects in an array called allEnemies
var allEnemies = [];
    allEnemies.push(enemy1);
    allEnemies.push(enemy2);
    allEnemies.push(enemy3);
    allEnemies.push(enemy4);
    allEnemies.push(enemy5);
    allEnemies.push(enemy6);

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