const inputPassword = document.querySelectorAll("#input-password");

inputPassword.forEach(item=>{
    item.addEventListener("click",(e)=>{
    

        if( e.target.parentElement.childNodes[1].type === "password"){
            e.target.parentElement.childNodes[1].type = "text";
            e.target.setAttribute("class","ri-eye-line")
         
        }
        else if( e.target.parentElement.childNodes[1].type === "text"){
            e.target.parentElement.childNodes[1].type = "password";
            e.target.setAttribute("class","ri-eye-off-line")
        }
    })
})

