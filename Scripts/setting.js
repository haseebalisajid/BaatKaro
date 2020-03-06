var leadsRef = database.ref('leads');
leadsRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      console.log(childData)
    });
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