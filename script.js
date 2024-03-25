function expandVideo() {
    var video = document.getElementById("myVideo");
    if (!video.classList.contains("expanded")) {
        // If video is not expanded, open a new window with the video URL
        var videoUrl = video.getAttribute("src");
        window.open(videoUrl, "_blank", "width=800,height=600");
        // Add a class to indicate that the video is expanded
        video.classList.add("expanded");
    }
}
