var userName;
var userEmail;

firebase.auth().onAuthStateChanged(async firebaseUser => {
    if(firebaseUser){
        console.log(firebaseUser);
    }
});

var userName=document.getElementById('name');
var userStatus=document.getElementById('status');
function update(){
    console.log(userName.value);
    if(userName.value != "" && userStatus.value != ""){
        document.getElementById('save').disabled=false;
    }
    else{
        document.getElementById('save').disabled=true;
    }
}