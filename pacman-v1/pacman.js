//LEGEND
//0 -empty
//1 - banan 1
//3 - banan 3
//6 - meanion
//9 - pacman
var pac_r = 4;
var pac_c = 4;
var map = [
  [0, 1, 0, 0, 0, 0, 0, 3, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 9, 0, 0, 0, 0, 0],
  [0, 6, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
//alert(map[4][4]);
function moveRight(){
  map[pac_r][pac_c] = 0; //delete from current location
  pac_c++; //step to right
  map[pac_r][pac_c] = 9; //show in new coords
  showMap();
}
function moveDown(){
  map[pac_c][pac_r] = 0; //delete from current location
  pac_c++; //step to left
  map[pac_c][pac_r] = 9; //show in new coords
  showMap();
}
function moveLeft(){
  map[pac_r][pac_c] = 0; //delete from current location
  pac_c--; //step to left
  map[pac_r][pac_c] = 9; //show in new coords
  showMap();
}
function moveUp(){
  map[pac_c][pac_r] = 0; //delete from current location
  pac_c--; //step to left
  map[pac_c][pac_r] = 9; //show in new coords
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
    }
  }
}
showMap();
