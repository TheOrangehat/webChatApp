console.log("hello world!!");

let Attachbox = document.getElementById("attachbox");
let Attachback = document.getElementById("attachback");
let Attachfront = document.getElementById("attachfront");
let menuBox  = document.getElementsByClassName("personOptions")[0];
let overlay = document.getElementsByClassName("overlay")[0];
let chatList = document.getElementsByClassName("chatList")[0];


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
function toogleclicked() {
    // menuBox.style.display = "flex";
    // menuBox.style.right = "2rem";
    // menuBox.style.top = "5rem";
    menuBox.classList.toggle("open");
    overlay.classList.toggle("active");

}