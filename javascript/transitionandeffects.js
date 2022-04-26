console.log("hello world!!");

let Attachbox = document.getElementById("attachbox");
let Attachback = document.getElementById("attachback");
let Attachfront = document.getElementById("attachfront");

Attachbox.addEventListener("mouseenter", ()=>{
    Attachfront.style.borderRadius =" 0px 58px 20px 0px";
    Attachback.style.borderRadius =" 0px 20px 58px 0px";
    Attachbox.addEventListener("mouseleave", ()=>{
        Attachback.style.borderRadius =" 0px 58px 20px 0px";
        Attachfront.style.borderRadius =" 0px 20px 58px 0px";
    
    })
})