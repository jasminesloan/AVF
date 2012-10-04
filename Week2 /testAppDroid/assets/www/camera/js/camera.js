
//image source
var imageSource;

//set format of returned value
var destinationType;

function onBodyLoad() {
    document.addEventListener("deviceready",onDeviceReady,false);
  //  console.log('deviceready');
}

/* PhoneGap is initialized */
function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
        console.log('Initialize PhoneGap');
}

// Call when Image successfully received
function onPhotoDataSuccess(imageData) { 
    // Get image handle
    var myImage = document.getElementById('myImage');   
    // Unhide image elements
    myImage.style.display = 'block';    
    // Show captured photo
    myImage.src = "data:image/jpeg;base64," + imageData;
}

// Called when image is received
function onPhotoURISuccess(imageURI) {
	console.log(imageURI);
    // Get image handle
    var myImage = document.getElementById('myImage');    
    // Unhide image elements
    myImage.style.display = 'block';   
    // Show the captured photo
    myImage.src = imageURI;
}

// Use a button to call this
function capturePhoto() {
    // Take picture using device camera and retrieve image as base64-encoded string
    try {
        navigator.camera.getPicture(onSuccess, onFail, { quality: 90, destinationType: destinationType.FILE_URI, saveToPhotoAlbum: true  });
    }
    catch (err) {
        alert(err);
    }
}

// Use a button to call this
function capturePhotoEdit() {
    try {
        // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
        navigator.camera.getPicture(onSuccess, onFail, { quality: 70, allowEdit: true, saveToPhotoAlbum: true  });
    }catch (err) {
        alert(err);
    }
}

// Use Button to call this
function getPhoto(source) {
    try {
        // Get image file location from specified source
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                    destinationType: destinationType.FILE_URI,
                                    sourceType: source, saveToPhotoAlbum: true });
    }catch (err) {
        alert(err);
    }
}

function onFail(message) {
    alert('Error!: ' + message);
}