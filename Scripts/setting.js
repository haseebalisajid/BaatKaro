let db=firebase.database();
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

    firebase.database().ref('users',currentUserKey.uid).set({
        name:userName.value,
        status:userStatus.value
    });
    console.log(db.currentUserKey.uid.name);
    // document.getElementById('Name').innerHTML=currentUserKey.name;
}