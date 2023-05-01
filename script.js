function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

  var btn =document.getElementById('btn');
  btn.addEventListener('click',function(e){
    e.preventDefault()
   var name=document.getElementById('name').value;
   var email=document.getElementById('email').value;
   var subject=document.getElementById('subject').value;
   var message=document.getElementById('message').value;
   var body='name'+name+'<br/> email: '  + email + '<br/> subject: ' +subject +'<br/> message: '+message;


   Email.send({
    SecureToken : "9ea300f3-871a-4b34-acb2-cfdc39fb2023",
    To : 'itbeast80@gmail.com',
    From : "shivanshsinghl96@gmail.com",
    Subject : "contact message",
    Body : body
}).then(
  message => alert(message)
);
  })