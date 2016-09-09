//This is the speed. I wouldn't recommend changing it.
var Speed = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
};

// The bad guys. They can be changed into something more menacing than a ladybug if you like.
//You'll have to put a .png of your new enemy into the image folder and put the URL under the this.sprite variable
//and have all kinds of fun.
var Enemy = function(x, y, sprite) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Speed(95, 250);
};
 
Enemy.prototype.update = function(dt) {
    if ( this.x < 808) {
        this.x += this.speed * dt;
    } else {
        this.x = 0;
    }
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Here we have your character being created. You can change a few setting here and make
//a different avatar for yourself. There are several female characters available in the image folder.
//You can change the 'images/char-boy.png' to anything you like, so long as the image is in the folder.
var Player = function() {
    this.x = 404;
    this.y = 390;
    this.sprite = 'images/char-boy.png';
};

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

//This involves movement. I suppose you can mess with someone's head by changing parts of this,
//but why would you want to do that? You really don't need to mess with this part.
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

//BorderTime! You can't leave the board, and this is how we keep you from leaving.
//These borders can be adjusted if you decide to make the board larger or smaller,
//but you don't have to monkey with the numbers here otherwise.
 var borders = {
    left: 0,
    right: 707,
    up: 50,
    bottom: 390
 };
 
 //This is what happens when you either win or die. 
 //Or at least this is what happens in the current iteration of the game. I'll see what might happen later...
 Player.prototype.reset = function(reset) {
    this.x = 404;
    this.y = 390;
 };

//Here thar be monsters. This is where we add more or less enemies. 
//It's a two-step process. Step one is making the enemy exist.
var enemy1 = new Enemy(-101, 55, 'images/enemy-bug.png');
var enemy2 = new Enemy(-101, 140, 'images/enemy-bug.png');
var enemy3 = new Enemy(-101, 225, 'images/enemy-bug.png');
var enemy4 = new Enemy(-101, 140, 'images/enemy-bug.png');
var enemy5 = new Enemy(-101, 55, 'images/enemy-bug.png');
var enemy6 = new Enemy(-101, 225, 'images/enemy-bug.png');
var enemy7 = new Enemy(-101, 140, 'images/enemy-bug.png');
var enemy8 = new Enemy(-101, 55, 'images/enemy-bug.png');
var enemy9 = new Enemy(-101, 225, 'images/enemy-bug.png');
var enemy10 = new Enemy(-101, 140, 'images/enemy-bug.png');
var enemy11 = new Enemy(-101, 55, 'images/enemy-bug.png');
var enemy12 = new Enemy(-101, 225, 'images/enemy-bug.png');

//Step two is making them show up on the screen.
var allEnemies = [];
    allEnemies.push(enemy1);
    allEnemies.push(enemy2);
    allEnemies.push(enemy3);
    allEnemies.push(enemy4);
    allEnemies.push(enemy5);
    allEnemies.push(enemy6);
    allEnemies.push(enemy7);
    allEnemies.push(enemy8);
    allEnemies.push(enemy9);
    allEnemies.push(enemy10);
    allEnemies.push(enemy11);
    allEnemies.push(enemy12);

// This puts your character on the board. You can adjust the numbers to change your start location.
var player = new Player(404, 390);
var allPlayers = [];
allPlayers.push(player);


// This is how you move. Don't mess with it. The game will get either very boring or a little confusing if you do.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});