function processAdressFrom() {
  var input_form = document.getElementById('input-address-form');
  var address_form = input_form.value;
  if(address_form.length<3) return; // exit function!
  //////////
  localStorage.setItem('address_form', address_form); //retine ce am scris
  console.log(adress_form);
}
function restoreAddressFrom(){
  var input_form = document.getElementById('input-address-form');
  var address_form = localStorage.getItem('address_form');
  if(address_form!=null){
    input_form.value = address_form;//pune inapoi cind fac refresh
  }
}
function clearAddressFrom(){
  var input_form = document.getElementById('input-address-form');
  input_form.value='';
  localStorage.removeItem('address_form');
}
