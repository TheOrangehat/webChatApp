let cont = document.getElementsByClassName("cont")[0];
let back = document.getElementsByClassName("back")[0];
let top9 = document.getElementsByClassName("top")[0];


console.log(cont);

cont.addEventListener("mouseenter", ()=>{
    back.style.borderRadius='0px 20px 58px 0px';
    top9.style.borderRadius='0px 58px 20px 0px';
    console.log("cont");
    
})

cont.addEventListener("mouseleave", ()=>{
    top9.style.borderRadius='0px 20px 58px 0px';
    back.style.borderRadius='0px 58px 20px 0px';
    console.log("cont");

})
