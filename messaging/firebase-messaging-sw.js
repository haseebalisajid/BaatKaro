// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

// Your web app's Firebase configuration
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


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon,
        name:payload.data.name
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});



