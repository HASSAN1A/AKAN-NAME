// var x = document.getElementById("myDate");

// function validate(form) {
//   var isChecked = Array.prototype.some.call(form.querySelectorAll('input[name=gender]'), function (radio) {
//       return radio.checked;
//   });

//   if (!isChecked) {
//       alert("You must select Male or Female");
//   }

//   return isChecked;
// }

// document.getElementById('test').addEventListener('submit', function (evt) {
//   if (!validate(evt.target)) {
//       evt.preventDefault();
//   }
// });

// function onFormSubmit(form_element) {

//   var slashcount = 0;
//   if ((form_element.birthday.value =="")||(form_element.birthday.value ==null))
//   {
//       alert("This field is required. Please enter date mm/dd/yyyy!");
//       false;
//   }
//   for (var i=0; i < birthday.length; i++)
//   {
//       temp = "" + birthday.substring(i, i+1);
//       if (temp == "/")
//       {
//           slashcount++;
//       }
//       if (valid.indexOf(temp) == "-1")
//       {
//           alert("error1.");
//           false;
//       }
//       if (slashcount != 2)
//       {
//           alert("error2");
//           false;
//       }
//       if((birthday.charAt(2)!= '/')||( birthday.charAt(5) != '/'))
//       {
//           alert("error3");
//           false;
//       }
//   }
//   return true;
// }​
// function getData() {
//   var a = document.getElementById("input_id").value;
//   var message = "user entered this value: " + a;

//   document.getElementById("alert").innerHTML = a;


function useInput() {
  var gender = document.getElementById("gender").value;
  var bdate = document.getElementById("bdate").value;

  var akanMen = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
  var akanWomen = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

  var CC = parseInt(bdate.substr(0, 2))
  var YY = parseInt(bdate.substr(1, 3))
  var MM = parseInt(bdate.substr(5, 6))
  var DD = parseInt(bdate.substr(8, 9))
  var d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7

  // if (gender === "Male") {
  //   alert("your" + akanMen[d])
  // } else
  //   alert("your" + akanWomen[d])


  alert(gender)
  alert(bdate)
}






















// var d = [sunday, monday, tuesday, wednesday, thursday, friday, saturday]







// if (d === sunday && gender === male){
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