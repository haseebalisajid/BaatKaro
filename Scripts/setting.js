var userName="";
var userPhoto="";
var userStatus="";



firebase.auth().onAuthStateChanged(async firebaseUser => {
    if(firebaseUser){
        await firebase.database().ref(`/users/${firebaseUser.uid}`).once('value').then(res => {
            let data = res.val();
            setValue(data.name,data.Status,data.photoURL)
        });
    }
});

function setValue(name,status,photo){
    var userName=document.getElementById('name').innerHTML=name
    var userStatus=document.getElementById('status').innerHTML=status
    document.getElementById('imgProfile').src = photo
}

function update(){
    console.log(userName.value);
    if(userName.value != "" && userStatus.value != ""){
        document.getElementById('save').disabled=false;
    }
    else{
        document.getElementById('save').disabled=true;
    }
}