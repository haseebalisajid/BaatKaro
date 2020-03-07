var userName=document.getElementById('Name')
var userStatus=document.getElementById('Status')



firebase.auth().onAuthStateChanged(async firebaseUser => {
    if(firebaseUser){
        await firebase.database().ref(`/users/${firebaseUser.uid}`).once('value').then(res => {
            let data = res.val();
            setValue(data.name,data.Status,data.photoURL)
        });
    }
});

function setValue(name,status,photo){
    var usrName=document.getElementById('Name').innerHTML=name
    var usrStatus=document.getElementById('Status').innerHTML=status
    document.getElementById('imgProfile').src = photo
}

function update(){
    if(userName.value != "" && userStatus.value != ""){
        document.getElementById('save').disabled=false;
    }
    else{
        document.getElementById('save').disabled=true;
    }
}
function changeVal(){
    var Name=document.getElementById('Name').value;
    var stat=document.getElementById('getStatus').value;
    firebase.database().ref(`users/${firebase.auth().uid}`).update({name: Name,Status:stat});
    location.reload();
}
function back(){
    window.location.href="/main.html"
}