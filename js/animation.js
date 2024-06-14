// Get the modal
var modal = document.getElementById("video-modal");

// Get the button that opens the modal
var btn = document.getElementById("watch-animation-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the video element inside the modal
var video = modal.querySelector("video");

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "flex";
    video.play(); // Start playing the video
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    video.pause(); // Pause the video
    video.currentTime = 0; // Reset video to the beginning
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        video.pause(); // Pause the video
        video.currentTime = 0; // Reset video to the beginning
    }
}
