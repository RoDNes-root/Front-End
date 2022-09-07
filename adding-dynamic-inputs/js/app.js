var eleman = document.querySelector("#veri");
var eleman = document.querySelector("#veri2");  
var ekle = document.querySelector("#ekle");

ekle.addEventListener("click",function(){
    var input=document.createElement("input"); 
    input.setAttribute("id",veri.value);
    input.setAttribute("type",veri2.value);
    input.setAttribute("placeholder",veri3.value);
    input.classList.add("form-control");
    form.appendChild(input);
  });
