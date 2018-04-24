window.onload = function(){
var form = document.getElementById("form")
var name = document.getElementById("petname")
var type = document.getElementById("bear-type")
var legs = document.getElementsByClassName("legs")
var special = document.getElementsByClassName("special")
var email = document.getElementById("email")
var password = document.getElementById("password")
var obj = {};

form.addEventListener("submit",function(event){
event.preventDefault();
obj.name = name.value;
obj.type = type.value;
for (let i = 0; i < legs.length ; i++){
    if(legs[i].checked === true){
    obj.legs = legs[i].value
    }
}

    for (let i = 0; i < special.length ; i++){
        if(special[i].checked === true){
        obj.special = special[i].value
        }
}
console.log(obj);
});
};