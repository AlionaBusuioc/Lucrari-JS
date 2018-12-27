function LoadContent(){
    //AJAX
    var xhr = new XMLHttpRequest();
    //1)Request ->hero.html
    xhr.open("GET","hero.html");
    //+3
    xhr.onload = function(){
        //console.log(xhr.responseText);
        document.getElementById('container').innerHTML = xhr.responseText;
    }
    //2)Response <-
    xhr.send();
    //3)REsponse ->#container
}