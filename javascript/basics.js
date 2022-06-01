console.log("hello");

let fileuploader = document.getElementById("fileUploader");
let ChatsPanale = document.getElementsByClassName("chats")[0];
let FeelsPanale = document.getElementsByClassName("feels")[0];
let GroupsPanale = document.getElementsByClassName("groups")[0];
let midsearchInput = document.getElementById("searchInput");  //input box for search
let midSearchBox = document.getElementsByClassName("midBoxSearchBar")[0]; //box search bar container
let midMenuBox = document.getElementsByClassName("midMenuBox");

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


function ShowChat(id) {
    ChatsPanale.classList.add("Showme");
    FeelsPanale.classList.remove("Showme");
    GroupsPanale.classList.remove("Showme");
}


function changePanale(id) {
    if (id=="feelsButton") {
        ChatsPanale.classList.remove("Showme");
        FeelsPanale.classList.add("Showme");
        GroupsPanale.classList.remove("Showme");
    }
    else if (id == "chatButton"){
        ChatsPanale.classList.add("Showme");
        FeelsPanale.classList.remove("Showme");
        GroupsPanale.classList.remove("Showme");
    }
    
    else if (id == "groupsButton"){
        ChatsPanale.classList.remove("Showme");
        FeelsPanale.classList.remove("Showme");
        GroupsPanale.classList.add("Showme");
    }
}


let chatContactParant = document.getElementById("chatContactParant");
let data;


function getData() {
   fetch("./Data/Chat.JSON").then((response) =>{
       return response.json();
   }).then((data) =>{

        for (let index = 0; index < Object.keys(data.ChatContacts).length; index++) {
            console.log(index);
            let name = data.ChatContacts[index].contact.name;
            let profileimg = data.ChatContacts[index].contact.profile;
            let lastMsg = data.ChatContacts[index].contact.lastMsg;
            let lastSeen = data.ChatContacts[index].contact.lastSeen;
            let id = data.ChatContacts[index].contact.id;
            

            chatContactParant.innerHTML += `<div onclick="ShowChat(this.id)" id="${id}" class="midMenuBox flex align-center content-between">
            <span class="flex align-center">
                <span>
                    <img class="profileImg smallprofile" src="${profileimg}" alt="">
                </span>
                <div class="peoInfo">
                    <span class="name Bold">${name}</span>
                    <span class="lastMsg">${lastMsg}</span>
                </div>
            </span>
            <span class="lasttime">${lastSeen}</span>
        </div>`;
        // console.log("H")
            
        }

        

    //    console.log(data.ChatContacts.contact1.name);
   })
}











getData();