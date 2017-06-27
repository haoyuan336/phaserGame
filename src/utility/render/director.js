/**
 * Created by chuhaoyuan on 2017/6/26.
 */
const Director = function () {
  let that = {};
  let _oldTime = 0;

  that.create = function (width,height,resources) {
   return new Promise(function (resolve, reject) {
      console.log('create game with: ' + width + 'height:' + height);
      that.game = new Phaser.Game(width, height, Phaser.Canvas, "Game", {preload: function () {
        for (let i in resources){
          that.game.load.image(resources[i],resources[i]);
        }

      }, create: function () {
        if (resolve){
          resolve();
        }
      },update: update});
    })
  };

  const update = function () {
    if (that.runingWorld){
      let nowDate = new Date();
      let dt = 0;
      if (_oldTime < nowDate.getTime()){
        dt = nowDate.getTime() - _oldTime;
        _oldTime = nowDate.getTime();
      }
      // console.log('dt = ' + dt);
      that.runingWorld.update(dt);
    }
  };



  const runWorld = function (world) {
    // world.group = that.game.create.group();
    if (that.runingWorld){
      that.runingWorld.destroy();
    }
    that.runingWorld = world;
  };

  that.runWorld = runWorld;

  that.replaceWorld = function (world) {
    runWorld(world);
  };



  return that;
};
const Sharedirector = Sharedirector || (()=>{
    let that = {};
    let instance = null;
    const create = function () {
      if (instance === null){
        instance = Director();
      }
    };
    that.shareDirector = function () {
      create();
      return instance;
    };
    return that;
})();
export default Sharedirector;
  