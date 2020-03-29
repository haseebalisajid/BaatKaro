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
    if(Name.length == 0){
        firebase.database().ref(`/users/${userId}`).set({
            name:oName,
            Status:stat,
            photoURL:userPot
        })
    }
    else if(stat.length==0){
        firebase.database().ref(`/users/${userId}`).set({
            name:Name,
            Status:oStatus,
            photoURL:userPot
        })
    }
    else{
        
        firebase.database().ref(`/users/${userId}`).set({
            name:Name,
            Status:stat,
            photoURL:userPot
        })
    }
    
}
function uploadFile(){
      

    var ref = firebase.storage().ref();
    
    var file = document.querySelector("#file").files[0];

    const name=file.name

    const metaData={
        contentType:file.type
    }

    const task=ref.child(name).put(file,metaData)
    task.then(snapshot => snapshot.ref.getDownloadURL())
    .then(url =>{
        console.log(url)
        firebase.database().ref(`/users/${userId}`).set({
            photoURL:url
        })
        const image=document.querySelector('#imgProfile')
        image.src=url
    })
}
