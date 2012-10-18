var $ = function(x) {
		var theElement = document.getElementById(x);
		return theElement;
};

// ======================Camera==================================


// Get Image
// Success Callback
var imageSuccess = function (imageURI) {
  $("picture").src = imageURI;
}

// Error Callback
var imageError = function (message) {
  alert("An error has occured: " + message);
};

// Access camera - onclick button function
var getPicture = function () {
  navigator.camera.getPicture(imageSuccess, imageError, { quality: 50, 
  destinationType: Camera.DestinationType.FILE_URI }); 
};
// ========================================================

$("takePic").addEventListener("click", getPicture);