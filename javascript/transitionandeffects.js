console.log("hello world!!");

let Attachbox = document.getElementById("attachbox");
let Attachback = document.getElementById("attachback");
let Attachfront = document.getElementById("attachfront");
let menuBox  = document.getElementsByClassName("personOptions")[0];
let overlay = document.getElementsByClassName("overlay")[0];
let chatList = document.getElementsByClassName("chatList")[0];
let attachMenu = document.getElementsByClassName("attachFilemenu")[0];
let FeelNavbar = document.getElementsByClassName("feelNav")[0];
let Feelsmenu = document.getElementsByClassName("Feelsmenu")[0];
let mmidsearchInput = document.getElementById("searchInput");
let midSearchBox = document.getElementsByClassName("midBoxSearchBar")[0];
// normal fe
function basicFeature() {
    scrollBottom();

}

function scrollBottom() {
    let xH = chatList.scrollHeight; 
    chatList.scrollTo(0, xH);
    
}



// insert button effect
Attachbox.addEventListener("mouseenter", ()=>{
    Attachfront.style.borderRadius =" 0px 58px 20px 0px";
    Attachback.style.borderRadius =" 0px 20px 58px 0px";
    Attachbox.addEventListener("mouseleave", ()=>{
        Attachback.style.borderRadius =" 0px 58px 20px 0px";
        Attachfront.style.borderRadius =" 0px 20px 58px 0px";
    
    })
})


// drop menu 
function toogleclicked(id) {
    if (id == "menuBox" ){
        menuBox.classList.toggle("open");  
        overlay.classList.toggle("active");  

    }
    
   
    // insert menu id
    else if (id == "attachfront"){
        attachMenu.classList.toggle("open");
        overlay.classList.toggle("active");  

    }

     // feels menu box
     else if (id=="feelsMenubtn"){
        FeelNavbar.classList.toggle("open");
        Feelsmenu.classList.toggle("open");
        overlay.classList.toggle("active");  

    }

    else if (id == "overlay"){
        overlay.classList.toggle("active");  
        menuBox.classList.remove("open");
        attachMenu.classList.remove("open");
        // 
        FeelNavbar.classList.remove("open");
        Feelsmenu.classList.remove("open");
        // 

    }

   
 
}