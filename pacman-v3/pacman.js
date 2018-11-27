//LEGEND
//0 -empty
//1 - banan 1
//3 - banan 3
//6 - meanion
//9 - pacman
var pac_r = 4;
var pac_c = 4;
var pac_health = 100; //bomb->10 ->#stats, if health <=0 alert(Game over)
//checkBanana() <<< checkBomb() +20 health #stats
var map = [
  [0, 1, 0, 0, 0, 0, 0, 3, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 9, 4, 0, 0, 0, 0],
  [0, 6, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
//alert(map[4][4]);
function checkBomb() {
  if(map[pac_r][pac_c] == 4){
    map[pac_r][pac_c] = 10;
  }else{
    map[pac_r][pac_c] = 9;
  }
}
function action(){
 console.log(event.keyCode);
 switch(event.keyCode){
   case 37: moveLeft(); break;
   case 38: moveUp(); break;
   case 39: moveRight(); break;
   case 40: moveDown(); break;
 }
}
function moveRight(){
  if(pac_c<9){
  map[pac_r][pac_c] = 0; //delete from current location
  pac_c++; //step to right
  checkBomb();
  //
  // if(map[pac_r][pac_c] == 4){
  //   map[pac_r][pac_c] = 10;
  // }else{
  //   map[pac_r][pac_c] = 9;
  // }
  //
  map[pac_r][pac_c] == 9; //show in new coords
}
  showMap();
}
function moveLeft(){
  if(pac_c>0){
  map[pac_r][pac_c] = 0; //delete from current location
  pac_c--; //step to left
  checkBomb();
//  map[pac_r][pac_c] = 9; //show in new coords
}
  showMap();
}
function moveUp(){
  if(pac_r>0){
  map[pac_r][pac_c] = 0; //delete from current location
  pac_r--; //step to left
  checkBomb();
  //map[pac_r][pac_c] = 9; //show in new coords
}
  showMap();
}
function moveDown(){
  if(pac_r<9){
  map[pac_r][pac_c] = 0; //delete from current location
  pac_r++; //step to left
  checkBomb();
  //map[pac_r][pac_c] = 9; //show in new coords
}
  showMap();
}
function showMap() {
  var div_map = document.querySelector('#map');
  div_map.innerHTML = "";
  for (var r = 0; r < 10; r++) {
    for (var c = 0; c < 10; c++) {
      if (map[r][c] == 0) {
        div_map.innerHTML += '<div class="square"><div>';
      }
      if (map[r][c] == 9) {
        div_map.innerHTML += '<div class="square pacman"><div>';
      }
      if(map[r][c] == 1) {
        div_map.innerHTML += '<div class="square banan1"><div>';
      }
      if(map[r][c] == 3) {
        div_map.innerHTML += '<div class="square banan3"><div>';
      }
      if(map[r][c] == 6) {
        div_map.innerHTML += '<div class="square meanion"><div>';
      }
      if(map[r][c] == 4) {
        div_map.innerHTML += '<div class="square bomb"><div>';
      }
      if(map[r][c] == 10) { //pacman + explosion
        div_map.innerHTML += '<div class="square pacman"><div class="explosion"></div></div>';
      }
    }
  }
}
showMap();
