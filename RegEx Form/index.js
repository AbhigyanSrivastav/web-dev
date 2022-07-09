console.log("This is project 4");

let username = document.getElementById("name");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let submit = document.getElementById("submit")
let success = document.getElementById("success")

let namevalid = false;
let phonevalid = false;
let emailvalid = false;

username.addEventListener("blur", () => {
    console.log(`UserName is blurred`);
    //validate name here 
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/
    let str = username.value

    if (regex.test(str)) {
        console.log("Name is valid");
        username.classList.remove("is-invalid")
        document.getElementById("nameinvalid").innerText = ""
        namevalid = true;
    } else {
        console.log("Name is not valid");
        username.classList.add("is-invalid")
        document.getElementById("nameinvalid").innerText = "Error"
        namevalid = false;
    }

})
phone.addEventListener("blur", () => {
    console.log(`Phone is blurred`);
    //validate phone here

    let regex = /^[0-9]{10}$/
    let str = phone.value

    if (regex.test(str)) {
        console.log("Phone is valid");
        phone.classList.remove("is-invalid")
        document.getElementById("phoneinvalid").innerText = ""
         phonevalid = true;
    } else {
        console.log("Phone is not valid");
        phone.classList.add("is-invalid")
        document.getElementById("phoneinvalid").innerText = "Error"
         phonevalid = false;
    }
})
email.addEventListener("blur", () => {
    console.log(`Email is blurred`);
    //validate email here

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-z]+){2,10}$/
    let str = email.value

    if (regex.test(str)) {
        console.log("Email is valid");
        email.classList.remove("is-invalid")
        document.getElementById("emailinvalid").innerText = ""
         emailvalid = true;
    } else {
        console.log("Email is not valid");
        email.classList.add("is-invalid")
        document.getElementById("emailinvalid").innerText = "Error"
        emailvalid = false;
    }
})

submit.addEventListener('click', (e) => {
    e.preventDefault()
    console.log("You clicked on submit");

    if (namevalid && phonevalid && emailvalid) {
        success.classList.remove("alert-danger")
        success.classList.add("show","alert-success")
        success.innerHTML=
        ` <strong>Success!</strong> You Are Ready To Travel.`
        setTimeout(() => {
            success.classList.remove("show")
        }, 2000);
        //for submittion of form
        console.log("Form Is Getting Submitted");
    } else {
        success.classList.remove("alert-success")
        success.classList.add("show","alert-danger")
        success.innerHTML=
        ` <strong>Opps!</strong> Some Error Occured`
        setTimeout(() => {
            success.classList.remove("show")
        }, 2000);
        console.log("Some Error Occured In the form");
    }
})