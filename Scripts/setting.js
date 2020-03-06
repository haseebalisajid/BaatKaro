var userName="";
var userEmail="";
var userID="";
var userPhoto="";
var userStatus="";
console.log(firebase.database().currentUser);
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User logged in already or has just logged in.
      console.log(user.uid);
    } else {
      // User not logged in or has just logged out.
    }
  });

// firebase.auth().onAuthStateChanged(async firebaseUser => {
//     if(firebaseUser){
//         console.log(firebaseUser.email);
//         console.log(firebaseUser.uid);
//         await firebase.database().ref(`/users/${firebaseUser.uid}`).once('value').then(res => {
//             let data = res.val();
//             console.log(data);
//         });
//     }
// });


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