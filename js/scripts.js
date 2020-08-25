function useInput() {
  var gender = document.getElementById("gender").value;
  var bdate = document.getElementById("bdate").value;

  var akanMen = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
  var akanWomen = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

 
    
var CC = parseInt(bdate.substr(0, 2))
var YY = parseInt(bdate.substr(1, 3))
var MM = parseInt(bdate.substr(5, 6))
var DD = parseInt(bdate.substr(8, 9))
var d = parseInt(((CC / 4 - 2 * CC - 1) + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD) % 7)

if (gender === "Male") {
  alert("Your Akan name is " + akanMen[d])
} else
  alert("Your Akan name is " + akanWomen[d])
}




 
  






