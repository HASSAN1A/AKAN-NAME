// var x = document.getElementById("myDate");
// var x = document.createElement("INPUT");
// x.setAttribute("type", "date");

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
// }
function akanName() {
  var gender = document.getElementById("gender").value;
  var bdate = document.getElementById("bdate").value;
}


  // function submittedData() {
  //   var a = document.getElementById("birthday").value;
  //   alert(a);
  // }
  // }
  // if (first==="3") {
  //   alert("male");
  // } else if (first==="4") {
  //   alert("female");
  // } else {
  //   alert("error");
  // }


  // var d = new Date();
  // var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // document.getElementById("demo").innerHTML = days[d.getDay()];


  // var d = new Date();
  // document.getElementById("demo").innerHTML = d.getDay();








  // const date1 = new Date('August 19, 1975 23:15:30 GMT-11:00');
  // console.log(date1.getUTCDay());





















  //     var d = [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday]
  //     var gender = (male, female)

  //     var gender = ""


  // if (d === sunday && gender === male) {
  //   console.log(you were born on Sunday and your Akan name is Kwasi)
  // } else if ( === monday && gender === male) {
  //   console.log(you were born on Monday and your Akan name is Kwadwo)
  // } else if (d === tuesday && gender === male) {
  //   console.log(you were born on Tuesday and your Akan name is Kwabena)
  // } else if (d === wednesday && gender === male) {
  //   console.log(you were born on Wednesday and your Akan name is Kwaku)
  // } else if ( === thursday && gender === male) {
  //   console.log(you were born on Thursday and your Akan name is Yaw)
  // } else if (d === friday && gender === male) {
  //   console.log(you were born on Fridayday and your Akan name is Kofi)
  // } else if (d === saturday && gender === male) {
  //   console.log(you were born on Saturday and your Akan name is Kwame)
  // } else {
  //   console.log(Sorry dude!)
  // }
  // if (d === sunday && gender === female) {
  //   console.log(you were born on Sunday and your Akan name is Akosua)
  // } else if (d === monday && gender === female) {
  //   console.log(you were born on Monday and your Akan name is Adwoa)
  // } else if (d === tuesday && gender === female) {
  //   console.log(you were born on Tuesday and your Akan name is Abenaa)
  // } else if (d === wednesday && gender === female) {
  //   console.log(you were born on Wednesday and your Akan name is Akua)
  // } else if (d === thursday && gender === female) {
  //   console.log(you were born on Thursday and your Akan name is Yaa)
  // } else if (d === friday && gender === female) {
  //   console.log(you were born on Friday and your Akan name is Afua)
  // } else if ( === saturday && gender === female) {
  //   console.log(you were born on Saturday and your Akan name is Ama)
  // } else {
  //   console.log(Sorry!Lady.)