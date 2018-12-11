function processAdressFrom(){
  var input_from = document.getElementById('input-adress-from');
  var adress_from = input_from.value;
  ///
  if(adress_from.length < 3 ) return;
  localStorage.setItem('adress_from', adress_from);
  console.log(adress_from);
}


function restoreAdressFrom(){
  var input_from = document.getElementById('input-adress-from');
  var adress_from = localStorage.getItem('adress_from');
  if(adress_from !=null){
    input_from.value = adress_from;
  }
}

function restoreAdressTo(){
  var input_to = document.getElementById('input-adress-to');
  var adress_to = localStorage.getItem('adress_to');
  if(adress_to !=null){
    input_to.value = adress_to;
  }
}

function processAdressTo(){
  //to do

  var input_to = document.getElementById('input-adress-to');
  var adress_to = input_to.value;
  ///
  if(adress_to.length < 3 ) return;
  localStorage.setItem('adress_to', adress_to);
  console.log(adress_to);
}

function switchInputs(){
var input_to = document.getElementById('input-adress-to');
var input_from = document.getElementById('input-adress-from');
var temp = input_to.value;
input_to.value = input_from.value;
input_from.value = temp;
// switch adresses in inputs
}

function clearAdressForm(){
  var input_from = document.getElementById('input-adress-from');
  input_from.value = '';
  localStorage.removeItem('adress_from');
}

function clearAdressTo(){
  // to for 'To'
  var input_to = document.getElementById('input-adress-to');
  input_to.value = '';
  localStorage.removeItem('adress_to');
}

function selectTaxiType(){
  // to do interdependence
  var select_type = document.querySelector('#select-type');
  var select_price = document.querySelector('#select-price');
  select_price.value = select_type.value;
  console.log(select_type, select_price);
}
