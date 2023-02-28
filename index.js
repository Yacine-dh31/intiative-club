

  // Get the button and the element you want to hide/show
var button = document.getElementById("btn");
var element = document.getElementById("listmeneu");

// Add a click event listener to the button
button.addEventListener("click", function() {
  // Check the current display style of the element
  if (element.style.display === "none") {
    // If the display is set to "none", change it to "block"
    element.style.display = "block";
  } else {
    // If the display is not set to "none", change it to "none"
    element.style.display = "none";
  }
});

//  start logo event

const logo = document.getElementById("#logo");

logo.addEventListener("click", function() {
  window.location.href = "index.html"; });
//  end logo event
// email contact 
var mailIcon = document.getElementById("mail-icon");
mailIcon.onclick = function() {
  window.location.href = "mailto:clubscientifiqueinitiative@gmail.com?subject=Subject%20of%20email&body=Body%20of%20email";
}



