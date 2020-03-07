var userName="";
var userEmail="";
var userID="";
var userPhoto="";
var userStatus="";

// var leadsRef = firebase.database().ref('users');
// leadsRef.on('value', function(snapshot) {
//     //console.log(snapshot.id);
//     snapshot.forEach(function(childSnapshot) {
//       var childData = childSnapshot.val();
//       console.log(childData.key);
//     });
// });

firebase.auth().onAuthStateChanged(async firebaseUser => {
    if(firebaseUser){
        console.log(firebase.auth().currentUser.key);
    }
});


//  console.log(userEmail,userName,userID);
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