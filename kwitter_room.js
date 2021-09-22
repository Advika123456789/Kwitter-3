var firebaseConfig = {
      apiKey: "AIzaSyDlf-RXI2j3mseaB87HWUzTIx41AyxQkD4",
      authDomain: "kelly-j9mr.firebaseapp.com",
      databaseURL: "https://kelly-j9mr-default-rtdb.firebaseio.com",
      projectId: "kelly-j9mr",
      storageBucket: "kelly-j9mr.appspot.com",
      messagingSenderId: "679288840123",
      appId: "1:679288840123:web:48e97ffb863e3058d4ae9e"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
    



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

function logout()  {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}