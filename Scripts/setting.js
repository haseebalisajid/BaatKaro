let db=firebase.database();
var user=firebase.auth().currentUser;
if(user){
    console.log(user.email);
}
else{
    console.log("na vai");
}
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
function done(){

    firebase.database().ref('users/',userID).set({
        name:userName.value,
        status:userStatus.value
    });
    // document.getElementById('Name').innerHTML=currentUserKey.name;
}