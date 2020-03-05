var firebaseConfig = {
    apiKey: "AIzaSyDejeg2AC2WPFWJwCNuSo766wYJijWCQCc",
    authDomain: "chat-app-9ab99.firebaseapp.com",
    databaseURL: "https://chat-app-9ab99.firebaseio.com",
    projectId: "chat-app-9ab99",
    storageBucket: "chat-app-9ab99.appspot.com",
    messagingSenderId: "938353661863",
    appId: "1:938353661863:web:ce0d6774295195d6f94882"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
let id=firebase.auth().currentUser;
console.log(id + "sda");
let ref = firebase.database().ref('/users/' + id).once('value').then(function(snapshot) {
    let userData = snapshot.val();
    console.log(userData.email);
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