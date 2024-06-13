var fName, lName, email, query, message;

$(".submit-button").on("click", function(event) {
    event.preventDefault();
    fName = $(".fName-input").val();
    lName = $(".lName-input").val();
    email = $(".email-input").val();
    query = $("input[name='inquiry']:checked").val();
    message = $(".message-textarea").val();
    if(fName !== '' && lName !== '' && email !== '' && query !== '' && message !== '' ){
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
    }

    submittedFunction();
});


var submittedFunction = () =>{
    $("#contactForm")[0].reset();
}
