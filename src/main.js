import {director} from './utility/import'
import defines from './game-defines'
import MainWorld from './game/main-world'
import resources from './resources'
window.onload = function () {
  console.log('window onload');
  director.create(defines.width,defines.height,resources);
  
  let mainWorld = MainWorld();
  mainWorld.init();
  director.runWorld(mainWorld);



};