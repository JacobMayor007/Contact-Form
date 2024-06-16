function sendEmail(fName, lName, email, query, message) {
    var bodyMessage = `Full Name: ${fName} ${lName}<br>Email: ${email} <br> Message: ${message}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "jacobmary.tapere007@gmail.com",
        Password : "79B0A934D8699E32E5A3E27E677CF4D352A9",
        To : 'jacobmary.tapere007@gmail.com',
        From : email,
        Subject : query,
        Body : bodyMessage,
    }).then(
        message => {
            alert(message);
            $("#toast-message").slideDown(1000).css({
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: "40px" ,
                borderRadius: "15px",
                color: "white",
            });
            setTimeout(()=>{
                $("#toast-message").slideUp(1000);
            }, 3000);
            $("#contactForm")[0].reset();
        }
    );
}
