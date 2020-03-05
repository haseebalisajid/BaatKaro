
let id=firebase.auth().currentUser;
console.log(id + "sda");
let ref = firebase.database().ref('users/' + id).once('value').then(function(snapshot) {
    let userData = snapshot.val();
    console.log(userData);
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