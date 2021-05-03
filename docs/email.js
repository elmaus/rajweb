const btn = document.querySelector('button');


function print() {
    var message = document.getElementById("name");
    console.log(message.value);
    alert("Under maintenance");
}

btn.addEventListener('click', print);

/*
btn.addEventListener('click', () => (
    
    Email.send({
        host: "smtp.mailtrap.io",
        Username: "skdkfjskjdk",
        password:"ksjdfkjsdkfjsk",
        to: "",
        From:inputs.elements["email"].value,
        Subject:"Contact Us Query By Cusomer",
        Body:inputs.elements["message"].value + "<br>" + inputs.element["name"].value + "<br>" + insputs.elements["phone"]
    }).then(msg => alert("The email successfully sent"))

))
*/