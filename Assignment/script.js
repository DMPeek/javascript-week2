function userName() {
let username = document.getElementById("userWelcome").value;
alert("Welcome to Memphis Dubs, " + username + "!")
document.getElementById("welcomeMessageBody").style.display = "none";
document.getElementById("head").style.display = "flex";
let bkgrnd = document.createElement("img");
document.body.appendChild(bkgrnd);
bkgrnd.id = "backgroundImage";
document.getElementById("backgroundImage").classList.add("bannerImage")
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let userEmail = document.getElementById("uEmail").value;
    let userMessage = document.getElementById("uMessage").value;
    let userNumber = Math.floor(Math.random() * 1000);
    let userSubjectLine = document.getElementById("userSubject").value;

    let encodedSubject = encodeURIComponent(userSubjectLine);
    let encodedBody = encodeURIComponent(userMessage);

    let mailtoLink = `mailto:dmp@mdubs.com?cc=dustinmpeek@outlook.com&subject=${encodedSubject + ' ' + userNumber}&body=${encodedBody}`;

    console.log(userEmail);
    window.location.href = mailtoLink;

    let container = document.getElementById("formContainer");

    document.getElementById("holdingStuff").removeChild(container);
    let thanksButton = document.createElement("button");
    document.getElementById("holdingStuff").appendChild(thanksButton);
    thanksButton.id = "returnHome";
    thanksButton.innerHTML = "Thanks! Return Home";

    thanksButton.addEventListener("click", function() {
        window.location.href = "home.html";
    });

});