

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRHds4RpZeIbzAyloSWMozXGUEa9KUmlg",
  authDomain: "ava-xsde.firebaseapp.com",
  databaseURL: "https://ava-xsde.firebaseio.com",
  projectId: "ava-xsde",
  storageBucket: "ava-xsde.appspot.com",
  messagingSenderId: "159210736417",
  appId: "1:159210736417:web:300c82cea58861c4240c60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
           purpose : "adding room name" 
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html";
}