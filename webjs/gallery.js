function upDate(previewPic) {
    console.log("Mouse over image:", previewPic);
    
    // Check alt and source
    console.log("Alt text:", previewPic.alt);
    console.log("Image source:", previewPic.src);
    
    // Update the text of the element with id of image
    document.getElementById('image').innerHTML = previewPic.alt;

    // Update the background image of the element with id of image
    document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`;
}

function undo() {
    // Reset the background image to original value
    document.getElementById('image').style.backgroundImage = "url('')";

    // Reset the text back to original
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}
