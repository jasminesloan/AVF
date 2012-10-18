	$("#camera").on("click", function(){
accessCamera();
});

var accessCamera = function(){
navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
destinationType: Camera.DestinationType.FILE_URI,
targetWidth: 250,
targetHeight: 450});

function onSuccess(imageURI) {
localStorage.setItem("picture",imageURI);
displayImage();
//var image = document.getElementById('myImage');
//image.src = imageURI;
//console.log(imageURI);
}

function onFail(message) {
alert('Failed because: ' + message);
}
};
//Display an image
var displayImage = function(){
var imageLocation = localStorage.getItem("picture");
console.log(imageLocation);
var ask = confirm("Preview Picture?");
if (ask){
$("#picturebucket").append('<div id="picture_div" class="picture_div"></div>')
$("#picture_div").append('<img id="newpicture" class="newpicture"></img>');
$("#newpicture").attr("src",imageLocation);
}
window.location="#newpicture"
};


function getImage(source) {
    try {
        // Get image file location from specified source
        navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
                                    destinationType: destinationType.FILE_URI,
                                    sourceType: source, saveToPhotoAlbum: true });
    }catch (err) {
        alert(err);
    }
}