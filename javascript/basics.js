console.log("hello");

let fileuploader = document.getElementById("fileUploader");




function uploadBoxOpner(id) {
    console.log("funstarted");
    
    if (id == "imgsend") {
        fileuploader.accept = "image/*";      
        fileuploader.click() ;    
    }

    else if (id == "videosend") {
        fileuploader.accept = "video/mp4";      
        fileuploader.click() ; 
    }
    
    else if (id == "audiosend") {
        fileuploader.accept = "audio/*";      
        fileuploader.click() ; 
    }
    
    else if (id == "filesend") {
        fileuploader.accept = "";      
        fileuploader.click() ; 
    } else {
        
    }
}


let hhh = document.getElementById("hhh");

function showPreview(event){
    if(event.target.files.length > 0){
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById("hhh");
      preview.src = src;
      preview.style.display = "block";
    }
}
