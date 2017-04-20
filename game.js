/**
 * Created by chuhaoyuan on 2017/4/20.
 */
import resources from './src/resources'
var width = 754;
var height = 480;
var score = '100';
// var body = undefined;
var player = undefined;
var cursors = undefined;
var scoreText = undefined;
var speed = 1;
var button = undefined;
var sprite = undefined;
var tileSprite = undefined;
var game = new Phaser.Game(width,height,Phaser.AUTO,null,{preload: preload,create: create,update: update,render: render});
function preload() {
  game.load.image('snakeHead','asset/dragon_head.png');
  // game.load.image('body','asset/dragon_8.png');
  for (let i in resources){
    game.load.image(resources[i],resources[i]);
  }
}
function create() {
  tileSprite = game.add.tileSprite(0,0,1920,1920,resources.background_2);
  game.add.tileSprite(0,0,1920,1920,resources.background_3);
  game.add.tileSprite(0,0,1920,1920,resources.bj1);
  game.world.setBounds(0,0,1920,1920);
  game.physics.startSystem(Phaser.Physics.P2JS);
  player = game.add.sprite(game.world.centerX,game.world.centerY,resources.dragon_head);
  game.physics.p2.enable(player);
  cursors = game.input.keyboard.createCursorKeys();
  // game.camera.follow(player);

  button = game.add.button(game.world.centerX,game.world.centerY,resources.direction_2,actionOnClick,this,2,1,0);

  button.anchor.set(0.5);

  var bound = new Phaser.Rectangle( 100, 100,500,400);
  var graphics = game.add.graphics(bound.x,bound.y);
  graphics.beginFill(0x000077);
  graphics.drawRect(0,0,bound.width,bound.height);
  sprite = game.add.sprite( 100, 100,resources.direction_2);
  sprite.inputEnabled = true;
  sprite.anchor.set(0.5);
  sprite.input.enableDrag();
  // sprite.input.boundsRect = bound;
  // tileSprite.inputEnabled = true;
  // tileSprite.event.onInputDown.add(function (s) {
  //   console.log('s = ' + JSON.stringify(s));
  // })

  sprite.events.onInputDown.add(function(s){
    let keys = [];
    for (let i in s){
      keys.push(i);
    };
    console.log('keys = ' + JSON.stringify(s.position));
    console.log('key list = ' + JSON.stringify(keys));
  });
  sprite.events.onInputOver.add(function (s) {
    console.log('keys = ' + JSON.stringify(s.position));
  })
}
function update() {
  // console.log('position = ' + sprite.x,sprite.y);
  console.log('position = ' + game.input.activePointer);
  player.body.setZeroVelocity();
  if (cursors.up.isDown){
    player.body.moveUp(300);
  }else if (cursors.down.isDown){
    player.body.moveDown(300);
  }else if (cursors.left.isDown){
    player.body.moveLeft(300);
  }else if (cursors.right.isDown){
    player.body.moveRight(300);
  }
}
function render() {
  // game.debug.cameraInfo(game.camera,32,32);
  game.debug.spriteCoords(player,32,500);
  game.debug.inputInfo(32,32);
}
function actionOnClick() {
  button.visible = false;
}