function removeRedColorFilter(pWidth, pHeight) {

	myImage = ctx.getImageData(0, 0, pWidth, pHeight);

	picLength = pWidth * pHeight;
	// Loop through data.
	for (var i = 0; i < picLength * 4; i += 4) {

		// First bytes are red bytes.
		myImage.data[i] = 0;    // Remove all red.

		// Second bytes are green bytes.
		// Third bytes are blue bytes.
		// Fourth bytes are alpha bytes
	}
}

function putColorData() {
	ctx.putImageData(myImage, 0, 0);
}

function myFilter(camPhotoImage) {
	// Get the canvas element.
	canvas = document.getElementById("displayCanvas");
	if (canvas.getContext) {              // Make sure you got it.
		ctx = canvas.getContext("2d");    // Specify 2d canvas type.
		var myImage = new Image();        // new Image object

		// When the image is loaded, draw it.
		myImage.onload = function () {
			// Load the image into the context.
			ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);

			removeRedColorFilter(canvas.width, canvas.height);
			putColorData();

		}

		// Define the source of the image,
		// which then will automatic active .onload immediate function.
		myImage.src = camPhotoImage;
	}
}

function OpenCamera() {
	var dialog = new Windows.Media.Capture.CameraCaptureUI();


	dialog.captureFileAsync(Windows.Media.Capture.CameraCaptureUIMode.photo).done(function (file) {
		if (file) {
			var photoTaken = URL.createObjectURL(file);
			// photoTaken is the photo took from camera returned.
			myFilter(photoTaken);
		} else {
			// Show error if the file does not exist from camera.
		}
	})
}