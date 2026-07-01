function togglePassword(){

let password=document.getElementById("password");
let confirm=document.getElementById("confirmPassword");

if(password.type==="password"){

password.type="text";
confirm.type="text";

}

else{

password.type="password";
confirm.type="password";

}

}

// Access Current Location

function getLocation(){

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(showPosition,showError);

}

else{

alert("Geolocation is not supported.");

}

}

function showPosition(position){

document.getElementById("location").value=
position.coords.latitude + ", " +
position.coords.longitude;

}

function showError(error){

switch(error.code){

case error.PERMISSION_DENIED:
alert("Location permission denied.");
break;

case error.POSITION_UNAVAILABLE:
alert("Location unavailable.");
break;

case error.TIMEOUT:
alert("Request timed out.");
break;

default:
alert("Unknown error.");
}

}

