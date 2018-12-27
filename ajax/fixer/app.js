const KEY = 'aeba90f3d401387275f882bce49b38e5'; //CLIENT KEY
const URL = 'http://data.fixer.io/api/latest'; //ENDPOINT URL
var data = null;
function load(){
    //alert();
    //1)
    var xhr = new XMLHttpRequest();
    //2)
    xhr.onload = function(){
        //console.log(xhr.responseText);
        data = JSON.parse(xhr.responseText);
        //console.log(data.rates.USD);
        updateList();
    }
    xhr.open("GET", URL+'?access_key='+KEY);
    //3)
    xhr.send();
}

function updateList(){
var select = document.getElementById('currency');
select.innerHTML +='<option value="USD">' + data.rates.USD + '</option>';
select.innerHTML +='<option value="MDL">' + data.rates.MDL + '</option>';
select.innerHTML +='<option value="RUB">' + data.rates.RUB + '</option>';
}
function convert(){
  var amount = +document.getElementById('amount').value;
  var currency_code = document.getElementById('currency').value;
  var k = data.rates[currency_code];
  console.log(amount,k);
  //result -> input
  var result = document.getElementById('result');
  result.value = (amount/k).toFixed(2);
}