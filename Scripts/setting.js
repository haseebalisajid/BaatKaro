var userName;
var userEmail;
var userID;
var userPhoto;
var userStatus;
firebase.auth().onAuthStateChanged(async firebaseUser => {
    if(firebaseUser){
        userName=firebaseUser.displayName;
        userEmail=firebaseUser.email;
        userID=firebaseUser.uid;
    }
});

console.log(userEmail,userName,userID);
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