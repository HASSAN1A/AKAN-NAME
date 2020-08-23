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




 
  






// const birthday = new Date('August 19, 1975 23:15:30');
// const day1 = birthday.getDay();
// // Sunday - Saturday : 0 - 6

// console.log(day1);
// expected output: 2



// d = [0,1,2,3,4,5,6]


// if (d === 1 && gender === "Male"){
//   alert("you were born on Sunday and your Akan name is " + Kwasi)
// } else if (d === monday && gender === male) {
//   alert("you were born on Monday and your Akan name is " + Kwadwo)
// } else if (d === tuesday && gender === male) {
//   console.log("you were born on Tuesday and your Akan name is "+ Kwabena)
// } else if (d === wednesday && gender === male) {
//   console.log("you were born on Wednesday and your Akan name is" Kwaku)
// } else if (d === thursday && gender === male) {
//   console.log("you were born on Thursday and your Akan name is "Yaw)
// } else if (d === friday && gender === male) {
//   console.log("you were born on Fridayday and your Akan name is" Kofi)
// } else if (d === saturday && gender === male) {
//   console.log("you were born on Saturday and your Akan name is" Kwame)
// } else {
//   console.log(Sorry dude!)
// }
// if (d === sunday && gender === female) {
//   console.log("you were born on Sunday and your Akan name is" Akosua)
// } else if (d === monday && gender === female) {
//   console.log("you were born on Monday and your Akan name is "Adwoa)
// } else if (d === tuesday && gender === female) {
//   console.log(you were born on Tuesday and your Akan name is Abenaa)
// } else if (d === wednesday && gender === female) {
//   console.log(""you were born on Wednesday and your Akan name is "Akua)
// } else if (d === thursday && gender === female) {
//   console.log("you were born on Thursday and your Akan name is "Yaa)
// } else if (d === friday && gender === female) {
//   console.log("you were born on Friday and your Akan name is "Afua)
// } else if (d === saturday && gender === female) {
//   console.log("you were born on Saturday and your Akan name is "Ama)
// } else {
//   console.log("Sorry!Lady.")