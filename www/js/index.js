
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    var options = {
        quality: 100,
        destinationType: Camera.DestinationType.FILE_URI,   
    }

    $("#takePhoto").on("click", takePic);

    function takePic() {
        navigator.camera.getPicture( onSuccess, onError, options);

    }
    function onSuccess(imageData) {
        console.log(imageData); 
        resolveLocalFileSystemURL(imageData, function (fileEntry) {
            var myNewImage = fileEntry.toURL()
            console.log(myNewImage);
            // do something with URL, assign to src or create an html 
           // $("#takePhoto").after("<img src='"+ myNewImage + "'>")
            $(".gallery").html("<img src='"+ myNewImage + "'>")
        }, onError);
    }
    

    function onError(message){
        alert("Photo not taken because" + message)
    }
    
}
