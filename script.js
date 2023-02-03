const convertButton = document.getElementById("convert-button");
convertButton.addEventListener("click", function () {
    const webpFile = document.getElementById("webp-file").files[0];
    if (!webpFile) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Select an image first!',
            button: 'Ok',
            confirmButtonColor: '#1f8a70'
        })
        return;
    };
    var reader = new FileReader();
    reader.onload = function (event) {
        var image = new Image();
        image.src = event.target.result;
        image.onload = function () {
            var canvas = document.createElement("canvas");
            canvas.width = image.width;
            canvas.height = image.height;
            canvas.getContext("2d").drawImage(image, 0, 0);

            var link = document.createElement("a");
            link.download = "converted.jpg";
            link.href = canvas.toDataURL("image/jpeg", 0.75);
            link.click();
        };
    };
    reader.readAsDataURL(webpFile);
});