var currentPos = 0;
var intervalHandle;

function beginAnimate() {
	document.getElementById("contacts").style.position = "absolute";
	document.getElementById("contacts").style.left = "0px";
    document.getElementById("contacts").style.top = "100px";
    // cause the animateBox function to be called
    intervalHandle = setInterval(animateBox,50);
}

function animateBox() {
    // set new position
    currentPos+=3;
    document.getElementById("contacts").style.left = currentPos + "px";
    // 
    if ( currentPos > 900) {
        // clear interval
        clearInterval(intervalHandle);
        // reset custom inline styles
        document.getElementById("contacts").style.position = "";
        document.getElementById("contacts").style.left = "";
        document.getElementById("contacts").style.top = "";
    }
}

window.onload =  function() {
	setTimeout(beginAnimate,2000);
};
