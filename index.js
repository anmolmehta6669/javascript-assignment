var person=new Object();
function showTime(){
var date=new Date();
  var time=date.toLocaleTimeString();
  document.getElementById("timer").innerHTML=time;
}
setInterval(showTime,1000);

function getCredentials(){
  var credentialArray=[];
  credentialArray.push(document.getElementById("login_id").value);
  credentialArray.push(document.getElementById("password").value);
  return credentialArray;
}

function checkValidation(){
  var credentials=getCredentials();
  person.id=credentials[0];
  person.password=credentials[1];
  if(person.id=="" || person.password==""){
    alert("Empty Id or Password");
    window.location="eg.html"
  }
  else if(person.id=='trainer101' && person.password=='scala01'){
  window.location="trainer.html"
}
else if(person.id=='intern101' && person.password=='scala01'){
window.location="interns.html"
}
  else{
    alert("Invalid Id or Password");
  }
}
//window.onload=  document.getElementById("trainer_id").innerHTML=person.id;
//  document.getElementById("trainer_pass").innerHTML=person.password;
