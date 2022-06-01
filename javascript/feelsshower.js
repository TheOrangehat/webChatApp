
let feelsVideo = document.getElementById("feelsVideo");
let progressBar = document.getElementsByClassName("progressBar")[0];

let FeelsBox = document.getElementsByClassName("feelPanale")[0];



function fleeShower(feelid) {
    
}

feelsVideo.addEventListener("dblclick", ()=>{
    feelsVideo.currentTime = 0;
})



feelsVideo.addEventListener("timeupdate", ()=>{
    // let vTime = parseInt(feelsVideo.currentTime);/
  progressPre = (feelsVideo.currentTime / feelsVideo.duration) * 100;
    progressBar.style.width = `${progressPre}%`;

})

function feelsVideoPlayer() {
    if (feelsVideo.paused || feelsVideo.currentTime <= 0) {
      feelsVideo.play();
    } else {
      feelsVideo.pause();
    }
  }


function Showme(id) {
  if (id =="sad") {
    FeelsBox.style.display = "block";

    Blockeroverlay.classList.toggle("active");  
    Blockeroverlay.style.left = "-60%";
    Blockeroverlay.style.opacity = "0.1";
    feelsVideo.play();


    
  }
}


function stopFeel() {
  FeelsBox.style.display = "none";
  feelsVideo.pause();
  feelsVideo.currentTime =0;
  Blockeroverlay.classList.remove("active");  

}