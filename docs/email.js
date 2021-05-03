const btn = document.querySelector('button');


function sendEmail() {
    let name = "Name: ${document.getElementById("name").value}\n";
    let surname = "Surname : ${document.getElementById("surname").value}\n";
    let email = "Email: ${document.getElementById("email").value}";
    let number = "Phone Number: ${document.getElementById("number").value}\n";
    let message = "Message:\n ${document.getElementById("name")}";
    
    Email.send({
        Host:"smtp.gmail.com",
        Username:"elmauscamus@yahoo.com", 
        Password:"1-Love-Codin6",
        To:"fortempoweb@gmail.com",
        From:"samuel-camus.com",
        Subject:"Testing Sending Email", 
        Body: name + surname + email + number + message
    }) 

}

btn.addEventListener('click', sendEmail);

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
