//Function to change the colour of the navigation bar
function firstColor (){
  var display = document.getElementById('navbar').style.backgroundColor = "green";
}

function secondColor (){
  var display = document.getElementById("navbar").style.backgroundColor = "blue";
}

function thirdColor (){
  var display = document.getElementById("navbar").style.backgroundColor = "pink";
}

function fourthColor (){
  var display = document.getElementById("navbar").style.backgroundColor = "purple";
}

function formValidation(){
  var name = document.getElementById("fName").value;
  var surname = document.getElementById("lName").value;
  var email = document.getElementById("email").value;
  var contact = document.getElementById("phone").value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (name != '' && email != '' && surname != '' && contact != ''){
    if (email.match(mailformat)) {
      if (document.getElementById("male").checked ||  document.getElementById("female").checked){
        if (contact.length == 10){
          alert("The form has been validated");
          return true;
        } else {
          alert("The contact number must be 10 digits long!");
          return false;
        }
      } else {
        alert("You must select gender.....!");
        return false;
      }
    } else {
      alert("Invalid Email Address!");
      return false;
    }
  } else {
    alert("All fields are required");
    return false;
  }
}

// Radio buttons
// function checkRadio(umsex, ufsex){
// var umsex = document.registration.msex;
// var ufsex = document.registration.fsex;
//  x = 0;
//  if (umsex.checked) {
//    x++;
//  } if (ufsex.checked) {
//    x++;
//  }
//  if (x==0) {
//    alert('Select Gender');
//    umsex.focus();
//    return false;
//  } else {
//    alert('Form Successfully Submited');
//    window.location.reload()
//    return true;
//  }
//   }
//
//  //Form validation
//  function formValidation(){
//    var name = document.getElementById("fName");
//
//    if (name.value == "") {
//      arlert("Please fill in the First Name field");
//      return false;
//    }
// }
//
// // Email Validation
// function validateEmail(){
//   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   var inputText = document.getElementById("email").value;
//   if(inputText.value.match(mailformat)){
//   document.myForm.email.focus();
//   return true;
//   } else {
//   alert("You have entered an invalid email address!");
//   document.myForm.email.focus();
//   return false;
// }
// }

var i = 0; //Starting point of the slideshow
var images = []; //Variable to store images
var time = 3000; //Time for each image to display

//My images
images[0] = './pics/1.jpg';
images[1] = './pics/2.jpg';
images[2] = './pics/16.jpg';
images[3] = './pics/17.jpg';
images[4] = './pics/10.jpg';
images[5] = './pics/6.jpg';
images[6] = './pics/8.jpg';
images[7] = './pics/9.jpg';
images[8] = './pics/10.jpg';
images[9] = './pics/11.jpg';
images[10] = './pics/12.jpg'

//Function to change images
function changeImg(){
	document.slide.src = images[i];

	if(i < images.length - 1){
		i++;
	} else {
		i = 0;
	}

	setTimeout('changeImg()', time);
}

window.onload = changeImg;
