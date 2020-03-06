var leadsRef = firebase.database().ref('users');
leadsRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      console.log(childData)l
    });
});
let ref = firebase.database().ref('users/' + currentUser.uid).once('value').then(function(snapshot) {
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