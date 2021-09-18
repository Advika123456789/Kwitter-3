var firebaseConfig = {
    apiKey: "AIzaSyDlf-RXI2j3mseaB87HWUzTIx41AyxQkD4",
    authDomain: "kelly-j9mr.firebaseapp.com",
    databaseURL: "https://kelly-j9mr-default-rtdb.firebaseio.com",
    projectId: "kelly-j9mr",
    storageBucket: "kelly-j9mr.appspot.com",
    messagingSenderId: "679288840123",
    appId: "1:679288840123:web:1d30e9c54a0235fbd4ae9e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS

function addUser() {
    user_name= document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}