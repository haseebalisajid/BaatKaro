var userName;
var userPhoto;
var userStatus;


firebase.auth().onAuthStateChanged( firebaseUser => {
    if(firebaseUser){
        firebase.database().ref(`/users/${firebaseUser.uid}`).once('value').then( res => {
            let data = res.val();
            console.log(data.name,data.Status)
            userName=data.name
            userPhoto=data.photoURL
            userStatus=data.Status
        });
    }
});


console.log(userName,userPhoto,userStatus);
// var userName=document.getElementById('name');
// var userStatus=document.getElementById('status');
// function update(){
//     console.log(userName.value);
//     if(userName.value != "" && userStatus.value != ""){
//         document.getElementById('save').disabled=false;
//     }
//     else{
//         document.getElementById('save').disabled=true;
//     }
// }