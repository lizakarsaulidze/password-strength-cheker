let parameters = {
    count : false,
    letters : false,
    number : false,
    special : false,
}
 
let strengthBar = document.getElementById("strength-bar");
let msg = document.getElementById("msg");

function strengthchecker(){
    let password = document.getElementById("password").value;

    parameters.letters = (/[A-Za-z]+/.test(password))?
    true:false;
    parameters.number = (/[0-9]+/.test(password))?
    true:false;
    parameters.special = (/[!@#$%^&*()_+}{|":>?<]+/.test(password))? true : false;
    parameters.count =(password.letter > 7)? true : false;

   let barLength = Object.values(parameters).filter(value=>value);
   console.log(Object.values(parameters),barLength)


   strengthBar.innerHTML = "";
   for(let i in barLength){
    let span = document.createElement("span");
    span.classList.add("strength");
    strengthBar.appendChild(span); 
   }

   let spanRef = document.getElementsByClassName("strength");
   for(let i= 0; i < spanRef.length; i++){
      switch(spanRef.length - 1){
        case 0 :
            spanRef[i].style.backgroundColor = "#ff3e36"
            msg.textContent = "your passwors is very weak"
            break;
             case 1:
              spanRef[i].style.background = "#ff691f";
              msg.textContent = "your passwprd weak";
              break;
              case 2:
                spanRef[i].style.background = "#ffda36";
                msg.textContent = "your passwprd good";
                break;
                case 3:
                    spanRef[i].style.background = "#0be881";
                msg.textContent = "your password strong";

      }
     
   }
}

function toggle(){
    let password = document.getElementById("password");
    let eye = document.getElementById("toggle");

    if(password.getAttribute("type")== "password"){
        password.setAttribute("type","text");
        eye.style.color = "#0be881";
    }else{
        password.setAttribute("type","password");
        eye.style.color = "808080";
    }
}