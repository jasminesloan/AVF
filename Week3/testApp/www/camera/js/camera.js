// Globals to store camera and module
// --------------------------------------------------------------------------
var module;
var camera;

// --------------------------------------------------------------------------
// Capture functions
// --------------------------------------------------------------------------
var onCaptureImageSuccess = function (imageBuffer) {
    console.log("onCaptureImageSuccess");

    // Image capture success; create a DataURL from BlobBuilder and
    // display as an image

    var image = document.getElementById('image');
    if (image.src) {
        // Don't leak; release previous objectURL
        webkitURL.revokeObjectURL(image.src);
    }

    var builder = new WebKitBlobBuilder();
    builder.append(imageBuffer);
    image.src = webkitURL.createObjectURL(builder.getBlob());
}

var onCaptureClicked = function () {
    console.log("onCaptureClicked");
    camera.captureImage(onCaptureImageSuccess);
}

// --------------------------------------------------------------------------
// Main load function
// --------------------------------------------------------------------------
var onLoad = function() {
    console.log("onLoad");

    var onCreatePreviewNodeSuccess = function (previewElement) {
        // Preview node created; set height/width and add to DOM
        console.log("onCreatePreviewNodeSuccess");
        previewElement.height = 250;
        previewElement.width = 250;
        document.getElementById("preview_div").appendChild(previewElement);
    }

    var onGetCamerasSuccess = function(cameras) {
        // Save camera and create preview
        console.log("onGetCamerasSuccess");
        camera = cameras[0];
        console.log("  camera id: " + camera.id);
        camera.createPreviewNode(onCreatePreviewNodeSuccess);
    }

    var onCameraLoadSuccess = function(cameraModule) {
        // Module load success; get cameras
        console.log("onCameraLoadSuccess");
        module = cameraModule;
        module.getCameras(onGetCamerasSuccess);
    }

    console.log("  loading camera module...");
    navigator.loadModule('camera', onCameraLoadSuccess);
} 