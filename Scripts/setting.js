var userName=document.getElementById('name')
var userStatus=document.getElementById('getStatus')
var oName=""
var oStatus=""
var userId=""
var userPot=""


firebase.auth().onAuthStateChanged(async firebaseUser => {
    if(firebaseUser){
        userId=firebaseUser.uid
        await firebase.database().ref(`/users/${firebaseUser.uid}`).once('value').then(res => {
            let data = res.val();
            userPot=setValue(data.name,data.Status,data.photoURL)
        });
    }
});

function setValue(name,status,photo){
    var usrName=document.getElementById('Name').innerHTML=name
    var usrStatus=document.getElementById('Status').innerHTML=status
    oName=name;
    oStatus=status
    document.getElementById('imgProfile').src = photo
    return photo
}
console.log(userId)
function update(){
    if(userName.value != "" || userStatus.value != ""){
        document.getElementById('save').disabled=false;
    }
    else{
        document.getElementById('save').disabled=true;
    }
}
function changeVal(){
    var Name=document.getElementById('name').value;
    var stat=document.getElementById('getStatus').value;

        alert("Status NULL")
        firebase.database().ref(`/users/${userId}`).set({
            name:Name,
            Status:stat,
            photoURL:userPot
        })
    
}
function back(){
    window.location.href="/main.html"
}