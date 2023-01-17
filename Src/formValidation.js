

const myForm = document.getElementById('contactUsForm');
const inputs=document.querySelectorAll('input');
const formContainer = document.getElementById('contactUsMessage');
const required=["name","email","password","contact"];

// myForm.addEventListener("submit",formValidation);
// console.log(12)

function formValidation() {
    console.log("dani")
    //let data={};
    let error=undefined;
    inputs.forEach(function(el) {
        let temp=el.getAttribute("id");
        if(temp!=null){
            if (temp==="name") {
                let exp= /[A-Za-z]+$/;
                let result= exp.test(el.value);
                if (!result){
                    addError(el,"must be valid",temp);
                    error=true;
                }
                else {
                    let text=el.nextElementSibling;
                    text.innerHTML='';
                }
            }
            if (temp === "email") {
                let exp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
                let result = exp.test(el.value);
                if (!result) {
                addError(el, "must be valid", temp);
                error = true;
                }
                else {
                    let text=el.nextElementSibling;
                    text.innerHTML='';
                }
            }
            if (temp === "subject") {
                let exp= /[A-Za-z]+$/;
                let result= exp.test(el.value);
                if (!result){
                    addError(el,"must be valid",temp);
                    error=true;
                }
                else {
                    let text=el.nextElementSibling;
                    text.innerHTML='';
                }
            }
            if (temp==="message") {
                let exp= /[A-Za-z]+$/;
                let result= exp.test(el.value);
                if (!result){
                    addError(el,"must be valid",temp);
                    error=true;
                }
                else {
                    let text=el.nextElementSibling;
                    text.innerHTML='';
                }
            }
            if(el.value.length===0 && required.includes(temp)){
                addError(el,"Required Field",temp);
                error= true; 
            }
            //data[temp] = el.value;

        }
    });
    if (!error) {
        let succss= document.createElement('div');
        succss.textContent="Submitted Successfully!";
        formContainer.appendChild(succss);
        succss.style.color="green";
        succss.style.fontSize="20px";
    }
}

function addError(el ,message,fieldName) {
    let errorText=el.nextElementSibling;
    errorText.innerHTML=fieldName + " " + message;
    errorText.style.color="red";
    el.focus();
}



