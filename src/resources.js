import defines from'./game-defines.js'
const res =
{
  "background_2": "background_2.png", 
  "background_3": "background_3.png", 
  "bj1": "bj1.png", 
  "direction_2": "direction_2.png", 
  "dragon_8": "dragon_8.png", 
  "dragon_head": "dragon_head.png"
}
 for (let i in res) {res[i] = defines.resPath+res[i];}
 export default res